-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2018 at 10:21 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `img` varchar(50) NOT NULL,
  `adress` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `age` varchar(3) NOT NULL,
  `sex` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`ID`, `name`, `img`, `adress`, `phone`, `email`, `age`, `sex`) VALUES
(1, 'hung', '1.jpg', '123 tran hung dao', '02625851', 'gmail@gmail.com', '23', '1'),
(2, 'tung', '3.jpg', '13 nguyen trai', '555454546', 'yahoo@gmail.com', '35', '0'),
(3, 'phuc', '3.jpg', '48 ly thai to', '0265868487', '123@yahoo.com', '43', '1'),
(4, 'sam', '2.jpg', '88 nguyen son', '098564789', '898@yahoo.com', '32', '0'),
(5, 'tu', '1.jpg', '48 ly thai to', '2352424', '123@yahoo.com', '43', '1'),
(6, 'quyen', '4.jpg', '48 ly thai to', '454410042345', '123@yahoo.com', '43', '1'),
(7, 'dat', '1.jpg', '48 ly thai to', '02124245445', '123@yahoo.com', '43', '1'),
(8, 'tam', '5.jpg', '48 ly thai to', '084569745211', '123@yahoo.com', '43', '1'),
(9, 'hien', '1.jpg', '48 ly thai to', '08145544455', '123@yahoo.com', '43', '1'),
(10, 'tuan', '2.jpg', '48 ly thai to', '09831258456', '123@yahoo.com', '43', '1'),
(11, 'loc', '3.jpg', '48 ly thai to', '2342343453', '123@yahoo.com', '43', '1'),
(12, 'lien', '5.jpg', '48 ly thai to', '09304234234', '123@yahoo.com', '43', '1'),
(13, 'hong', '1.jpg', '48 ly thai to', '02123151531', '123@yahoo.com', '43', '1'),
(14, 'cuc', '3.jpg', '48 ly thai to', '211002112212', '123@yahoo.com', '43', '1'),
(15, 'phuong', '4.jpg', '48 ly thai to', '1213511021231', '123@yahoo.com', '43', '1'),
(16, 'lan', '2.jpg', '48 ly thai to', '21121554', '123@yahoo.com', '43', '1'),
(17, 'tran', '4.jpg', '48 ly thai to', '02155115', '123@yahoo.com', '43', '1'),
(18, 'hoa', '3.jpg', '48 ly thai to', '102151554444', '123@yahoo.com', '43', '1'),
(19, 'xuan', '1.jpg', '48 ly thai to', '211003510545', '123@yahoo.com', '43', '1'),
(20, 'hue', '5.jpg', '48 ly thai to', '54445105454', '123@yahoo.com', '43', '1'),
(21, 'tan', '3.jpg', '48 ly thai to', '5445465654', '123@yahoo.com', '43', '1'),
(22, 'ly', '5.jpg', '', '05615615554', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `use`
--

DROP TABLE IF EXISTS `use`;
CREATE TABLE `use` (
  `ID` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `use`
--

INSERT INTO `use` (`ID`, `username`, `password`) VALUES
(1, 'user', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `use`
--
ALTER TABLE `use`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `use`
--
ALTER TABLE `use`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
