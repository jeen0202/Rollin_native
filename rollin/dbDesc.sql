CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `pcnt` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_UNIQUE` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `papers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `date` date NOT NULL DEFAULT (curdate()),
  `giftId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId_pk_idx` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `gifts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` int NOT NULL,
  `desc` varchar(500) NOT NULL,
  `popularity` int DEFAULT '0',
  `date` date DEFAULT (curdate()),
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
