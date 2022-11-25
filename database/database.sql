-- Active: 1668847646911@@127.0.0.1@3306

CREATE DATABASE
    IF NOT EXISTS `nodeBDD` DEFAULT CHARACTER SET = 'utf8';

USE nodeBDD;

CREATE TABLE
    IF NOT EXISTS `user` (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        firstname VARCHAR(255),
        lastname VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255),
        biography TEXT,
        phone VARCHAR(255) UNIQUE,
        address VARCHAR(255),
        additional_address VARCHAR(255),
        city VARCHAR(255),
        zipCode VARCHAR(255),
        role JSON,
        avatar VARCHAR(255),
        status TINYINT,
        created_at DATE
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS `ad` (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        title VARCHAR(255),
        content TEXT,
        price FLOAT,
        status TINYINT,
        created_at DATE,
        id_user INT,
        FOREIGN KEY (id_user) REFERENCES user(id)
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS `category` (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        title VARCHAR(255),
        id_parent INT
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS `ad_category` (
        id_category INT,
        id_ad INT,
        FOREIGN KEY (id_ad) REFERENCES ad(id),
        FOREIGN KEY (id_category) REFERENCES category(id)
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS `image` (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        url VARCHAR(255),
        id_ad INT,
        FOREIGN KEY (id_ad) REFERENCES ad(id)
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS `rate` (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        rate_value VARCHAR(255),
        comment TEXT,
        created_at DATE,
        id_user INT,
        id_ad INT,
        FOREIGN KEY (id_user) REFERENCES user(id),
        FOREIGN KEY (id_ad) REFERENCES ad(id)
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS `offer` (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        amount FLOAT,
        status TINYINT,
        created_at DATE,
        id_user INT,
        id_ad INT,
        FOREIGN KEY (id_user) REFERENCES user(id),
        FOREIGN KEY (id_ad) REFERENCES ad(id)
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS `order` (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        delivery_address VARCHAR(255),
        additional_delivery_address VARCHAR(255),
        city VARCHAR(255),
        zipCode VARCHAR(255),
        amount FLOAT,
        status TINYINT,
        created_at DATE,
        id_user INT,
        id_ad INT,
        FOREIGN KEY (id_user) REFERENCES user(id),
        FOREIGN KEY (id_ad) REFERENCES ad(id)
    ) ENGINE = InnoDB;