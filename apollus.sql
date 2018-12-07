-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 07-Dez-2018 às 17:54
-- Versão do servidor: 5.7.23
-- versão do PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apollus`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastros`
--

DROP TABLE IF EXISTS `cadastros`;
CREATE TABLE IF NOT EXISTS `cadastros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(1) DEFAULT NULL,
  `codigo` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `descricao` text COLLATE utf8_bin,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `cadastros`
--

INSERT INTO `cadastros` (`id`, `status`, `codigo`, `descricao`) VALUES
(36, 1, 'teste', 'testes'),
(37, 2, 'teste', 'testes');

-- --------------------------------------------------------

--
-- Estrutura da tabela `opcoes`
--

DROP TABLE IF EXISTS `opcoes`;
CREATE TABLE IF NOT EXISTS `opcoes` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `cadastro_id` int(10) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `codigo` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `descricao` text COLLATE utf8_bin,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `opcoes`
--

INSERT INTO `opcoes` (`id`, `cadastro_id`, `status`, `codigo`, `descricao`) VALUES
(60, 35, 1, 'adsddd', 'dddddd'),
(59, 35, 2, 'dd', 'adfasfas'),
(58, 35, 1, 'adfafs', 'asdfasfas'),
(62, 36, 2, 'teste', 'testes'),
(54, 34, 1, 'asdfaf', 'aadfsasf'),
(55, 34, 2, 'afdasfa', 'adfdasfadsf'),
(63, 37, 1, 'test', 'testes'),
(38, 33, 1, 'adfa', 'adfa');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
