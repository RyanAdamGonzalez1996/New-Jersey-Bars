DROP TABLE bar_description;

CREATE TABLE bar_description (
    bar_id serial   NOT NULL,
    restaurant_name varchar   NOT NULL,
    bar_type varchar   NOT NULL,
    price_name varchar   NOT NULL,
    rating decimal   NOT NULL,
    address_list varchar NOT NULL
);