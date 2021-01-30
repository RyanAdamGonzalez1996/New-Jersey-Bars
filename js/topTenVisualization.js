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
var svg = d3.select(".top_ten_bars")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append SVG group that contains our plot
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.right})`);

// CSV file path (bar_descriptions)
var filePath = "atlantic_city_data.csv"

// Read in CSV data
d3.csv("atlantic_city_data.csv").then(function(data) {

    console.log(data);
    // Declare the Data as numerals
    data.forEach(function(dataset) {
        dataset.rating_list = +dataset.rating_list
    });

    // Set Variables for the bars
    var barSpacing = 10;
    var barScale = 10;
    var barWidth = (plotWidth - (barSpacing * (data.length - 1))) / data.length;

    // Create Scale for X Coordinates
    var xScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.length), d3.max(data, d => d.length)])
        .range([0, plotWidth]);

    // Create Scale for Y Coordinates
    var yScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.rating_list), d3.max(data, d => d.rating_list)])
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
    var barGroup = chartGroup.selectAll("bar")
        .data(data)
        .enter()
        .append("bar")
        .attr("class", "barLocation")
        .attr("x", d => xScale(d.length))
        .attr("y", d => yScale(d.rating_list))
        .attr("width", )
        .attr("height", d => d.rating_list * barScale)
        .attr("opacity", 0.75);

    // Initialize tooltip
    var toolTip = d3.tip()
    .attr("class", "d3-tip")
    .html(function(d) {
        return (``)
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