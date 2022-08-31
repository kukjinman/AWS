CREATE TABLE `my_db`.`person_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `age` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;



INSERT INTO my_db.person_table (name, age) VALUE ( 'hong' , 25 );
INSERT INTO my_db.person_table (name, age) VALUE ('kim hong', 35);
INSERT INTO my_db.person_table (name, age) VALUE ('Lee hong', 25);

UPDATE my_db.person_table SET age = 15 WHERE name = 'hong';

SELECT * FROM my_db.person_table;

SELECT id, name, age FROM my_db.person_table;

SELECT id, name age FROM my_db.person_table WHERE age >30;

SELECT count(id) FROM my_db.person_table;
SELECT average(age) FROM my_db.person_table;

