// Create Top Ten Bars Chart (Bar Chart)

// SVG Dimensions
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

// Plot Dimensions
var plotWidth = svgWidth - margin.left - margin.right;
var plotHeight = svgHeight - margin.top - margin.bottom;

// Create SVG Wrapper
var svg = d3.select("#top_ten_bars")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append SVG group that contains our plot
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.right})`);

// CSV file path (bar_descriptions)
var filePath = "../csv/Alantic_City_data.csv";

// Read in CSV data
d3.csv(filePath).then(function(data) {

    // Declare a rating array to push ratings to
    var rating = [];
    var name = [];
    // Declare the Data as numerals
    data.forEach(function(dataset) {
        dataset.rating_list = +dataset.rating_list;
        rating.push(dataset.rating_list);
    });

    // Sort array in descending order
    rating.sort(function(a, b){return b-a});
    // Only keep the top ten ratings
    rating.splice(0,20);

    // Set Variables for the bars
    var barSpacing = 10;
    var barScale = 10;
    var barWidth = (plotWidth - (barSpacing * (data.length - 1))) / data.length;

    // Create Scale for X Coordinates
    var xScale = d3.scaleLinear()
        .domain([0, 10])
        .range([0, plotWidth]);

    // Create Scale for Y Coordinates
    var yScale = d3.scaleLinear()
        .domain([0, 5])
        .range([plotHeight, 0]);

    // Create Axis Functions
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // Append Axis to Plot
    chartGroup.append("g")
        .attr("transform", `translate(0, ${plotHeight})`)
        .call(xAxis);
    
    chartGroup.append("g")
        .call(yAxis);

    // Draw the bars on the plot
    var barGroup = chartGroup.selectAll("rect")
        .data(rating)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function(data, index){
            return index * 80 + 65;
        })
        .attr("y", d => yScale(d))
        .attr("width", 40)
        .attr("height", d => plotHeight - yScale(d))
        .attr("opacity", 0.75);

    // Initialize tooltip
    var toolTip = d3.tip()
    .attr("class", "d3-tip")
    .html(function(d) {
        return (d);
    })

    // Create the tooltip in chartGroup
    chartGroup.call(toolTip);
    
    // Mouseover event for bar objects
    barGroup.on("mouseover", function(d) {
        toolTip.show(d, this);
        console.log(d3.select(this));
    })
    // Mouseout event for bar objects
    .on("mouseout", function(d) {
            toolTip.hide(d);
    });

});