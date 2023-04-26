# /crown/img/hats/brown-brim.png

DROP TABLE product_96

CREATE TABLE product_96 (
    pId int,
    pName varchar(255),
    price int,
    cat_id varchar(255),
    img_url varchar(255)
)

INSERT INTO product_96
VALUES
(1, 'Brown Brim', 25, '5', '/crown/img/hats/brown-brim.png'),
(2, 'Blue Beanie', 18, '5', '/crown/img/hats/blue-beanie.png'),
(3, 'Brown Cowboy', 35, '5', '/crown/img/hats/brown-cowboy.png'),
(4, 'Grey Brim', 25, '5', '/crown/img/hats/grey-brim.png'),
(5, 'Black Jean Shearling', 125, '1', '/crown/img/jackets/black-shearling.png'),
(6, 'Blue Jean Jacket', 90, '1', '/crown/img/jackets/blue-jean-jacket.png'),
(7, 'Grey Jean Jacket', 90, '1', '/crown/img/jackets/grey-jean-jacket.png'),
(8, 'Brown Shearling', 165, '1', '/crown/img/jackets/brown-shearling.png')
