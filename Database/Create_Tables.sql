DROP TABLE bar_description

CREATE TABLE bar_description (
    bar_id serial   NOT NULL,
    bar_name varchar   NOT NULL,
    bar_type varchar   NOT NULL,
    avg_price varchar   NOT NULL,
    ratings decimal   NOT NULL,
    address varchar NOT NULL
);

