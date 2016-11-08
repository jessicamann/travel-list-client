DROP DATABASE IF EXISTS sites;
CREATE DATABASE sites;

\c sites;

CREATE TABLE places (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  location VARCHAR,
  description VARCHAR
);

INSERT INTO places (name, location, description)
  VALUES
    ('New York City', 'New York', 'A place on the east coast'),
    ('Honolulu', 'Hawaii', 'A place in the Pacific');
