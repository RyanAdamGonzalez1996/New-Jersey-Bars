-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/YjFbXz
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Bar Description" (
    "barID" int   NOT NULL,
    "barName" varchar   NOT NULL,
    "barType" varchar   NOT NULL,
    "website" varchar   NOT NULL,
    "hoursOfOperation" varchar   NOT NULL,
    "phoneNumber" int   NOT NULL,
    "avgPrice" varchar   NOT NULL,
    "Ratings" double   NOT NULL,
    CONSTRAINT "pk_Bar Description" PRIMARY KEY (
        "barID"
     )
);

CREATE TABLE "Location" (
    "barID" int   NOT NULL,
    "coordinates" varchar   NOT NULL,
    "county" varchar   NOT NULL,
    "streetAddress" varchar   NOT NULL,
    "town" varchar   NOT NULL,
    "state" varchar   NOT NULL,
    "zipcode" varchar   NOT NULL
);

ALTER TABLE "Bar Description" ADD CONSTRAINT "fk_Bar Description_barID" FOREIGN KEY("barID")
REFERENCES "Location" ("barID");

