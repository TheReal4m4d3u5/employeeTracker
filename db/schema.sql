
-- You might want to use a separate file that contains functions 
-- for performing specific SQL queries you'll need to use. 
-- A constructor function or class could be helpful for organizing these. 
-- You might also want to include a `seeds.sql` file to pre-populate your database, 
-- making the development of individual features much easier.

DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

\c books_db;

-- * `department`
--   * `id`: `SERIAL PRIMARY KEY`
--   * `name`: `VARCHAR(30) UNIQUE NOT NULL` to hold department name

CREATE TABLE favorite_books (
  id SERIAL PRIMARY KEY,
  section INTEGER NOT NULL,
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  quantity INTEGER NOT NULL
);

-- * `role`
--   * `id`: `SERIAL PRIMARY KEY`
--   * `title`: `VARCHAR(30) UNIQUE NOT NULL` to hold role title
--   * `salary`: `DECIMAL NOT NULL` to hold role salary
--   * `department_id`: `INTEGER NOT NULL` to hold reference to department role belongs to

CREATE TABLE course_names (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  department INTEGER,
  total_enrolled INTEGER
)


-- * `employee`
--   * `id`: `SERIAL PRIMARY KEY`
--   * `first_name`: `VARCHAR(30) NOT NULL` to hold employee first name
--   * `last_name`: `VARCHAR(30) NOT NULL` to hold employee last name
--   * `role_id`: `INTEGER NOT NULL` to hold reference to employee role
--   * `manager_id`: `INTEGER` to hold reference to another employee that
--      is the manager of the current employee (`null` if the employee has no manager)

CREATE TABLE course_names (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  department INTEGER,
  total_enrolled INTEGER
)