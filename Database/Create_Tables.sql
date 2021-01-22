DROP TABLE bar_description, bar_location

CREATE TABLE bar_description (
    bar_id serial   NOT NULL,
    bar_name varchar   NOT NULL,
    bar_type varchar   NOT NULL,
    website varchar   NOT NULL,
    hours_of_operation varchar   NOT NULL,
    phone_number int   NOT NULL,
    avg_price varchar   NOT NULL,
    ratings decimal   NOT NULL,
    PRIMARY KEY (bar_id)
);

CREATE TABLE bar_location (
   	bar_id int   NOT NULL,
    coordinates varchar   NOT NULL,
    county varchar   NOT NULL,
    streetAddress varchar   NOT NULL,
    town varchar   NOT NULL,
    state varchar   NOT NULL,
    zipcode varchar   NOT NULL,
	FOREIGN KEY (bar_id)
	REFERENCES bar_description (bar_id)
);

