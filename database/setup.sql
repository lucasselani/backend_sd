CREATE DATABASE ec021;
USE ec021;

DROP TABLE IF EXISTS toddy;
CREATE TABLE toddy (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lote VARCHAR(50) NOT NULL,
  conteudo INT NOT NULL,
  validade VARCHAR(25) NOT NULL
) ENGINE = INNODB;