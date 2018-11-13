-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 10-Out-2018 às 02:45
-- Versão do servidor: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chamados`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cham`
--

CREATE TABLE `cham` (
  `id` int(11) NOT NULL,
  `cod_cli` int(255) NOT NULL,
  `cod_tec` int(11) NOT NULL,
  `data_i` date NOT NULL,
  `data_f` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cham`
--

INSERT INTO `cham` (`id`, `cod_cli`, `cod_tec`, `data_i`, `data_f`) VALUES
(1, 1, 1, '1998-02-10', '1998-02-12');

-- --------------------------------------------------------

--
-- Estrutura da tabela `emp`
--

CREATE TABLE `emp` (
  `id` int(11) NOT NULL,
  `nome_emp` varchar(255) NOT NULL,
  `ende` varchar(255) NOT NULL,
  `cnpj` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `emp`
--

INSERT INTO `emp` (`id`, `nome_emp`, `ende`, `cnpj`) VALUES
(0, 'Mgsii', 'Rua 1', 5552),
(0, 'Gbfjkasdkl', 'Rua 1', 5552);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tec`
--

CREATE TABLE `tec` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cargo` varchar(255) NOT NULL,
  `id_cham` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tec`
--

INSERT INTO `tec` (`id`, `nome`, `cargo`, `id_cham`) VALUES
(1, 'Gabriel27', 'Suporte2', 1),
(2, 'Gabriel2', 'Suporte2', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cham`
--
ALTER TABLE `cham`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tec`
--
ALTER TABLE `tec`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cham`
--
ALTER TABLE `cham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tec`
--
ALTER TABLE `tec`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
