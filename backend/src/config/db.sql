CREATE DATABASE hotel_portal;
\c hotel_portal;


CREATE TABLE hotels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price INT,
    availability boolean
);

INSERT INTO hotels (name, location, price, availability)
VALUES
    ('Hotel Plaza', '123 Main St New York NY USA', 100, true),
    ('Beach Resort', '456 Ocean Ave Bank Lonon LN1 UFY UK', 200, true);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (email, password)
VALUES
    ('kaddyp2805@gmail.com', 'Test123'),
    ('nitin.bilonikar@gmail.com', 'Test1234'),
    ('test@example.com', 'password123');