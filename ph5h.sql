-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 01 dec 2016 kl 16:35
-- Serverversion: 10.1.13-MariaDB
-- PHP-version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `ph5h`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `actives`
--

CREATE TABLE `actives` (
  `id` int(11) NOT NULL,
  `username` varchar(21) NOT NULL,
  `credits` int(11) NOT NULL DEFAULT '50000',
  `pixels` int(11) NOT NULL DEFAULT '5000',
  `diamonds` int(11) NOT NULL DEFAULT '0',
  `roomvisits` int(11) NOT NULL DEFAULT '0',
  `figure` varchar(255) NOT NULL DEFAULT 'sh-3206-1408.cc-3389-110-1408.hr-831-40.lg-285-92.hd-190-8.ha-1006-92.ch-3030-1408'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `actives`
--

INSERT INTO `actives` (`id`, `username`, `credits`, `pixels`, `diamonds`, `roomvisits`, `figure`) VALUES
(13, 'Melld', 50000, 5000, 0, 0, 'sh-3206-1408.cc-3389-110-1408.hr-831-40.lg-285-92.hd-190-8.ha-1006-92.ch-3030-1408'),
(14, 'Meller2', 50000, 5000, 0, 0, 'sh-3206-1408.cc-3389-110-1408.hr-831-40.lg-285-92.hd-190-8.ha-1006-92.ch-3030-1408'),
(15, 'Meller', 50000, 5000, 0, 0, 'sh-3206-1408.cc-3389-110-1408.hr-831-40.lg-285-92.hd-190-8.ha-1006-92.ch-3030-1408');

-- --------------------------------------------------------

--
-- Tabellstruktur `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `user1` varchar(21) NOT NULL,
  `user2` varchar(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellstruktur `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `owner` varchar(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `items`
--

INSERT INTO `items` (`id`, `itemid`, `owner`) VALUES
(1, 1, 'Meller'),
(5, 1, 'Meller'),
(6, 1, 'Meller'),
(7, 1, 'Meller'),
(8, 2, 'Meller'),
(9, 1, 'Meller'),
(10, 1, 'Meller'),
(11, 1, 'Meller'),
(12, 1, 'Meller'),
(13, 1, 'Meller'),
(14, 1, 'Meller'),
(15, 1, 'Meller'),
(16, 1, 'Meller'),
(17, 1, 'Meller'),
(18, 1, 'Meller'),
(19, 1, 'Meller'),
(20, 1, 'Meller'),
(21, 1, 'Meller'),
(22, 1, 'Meller'),
(23, 1, 'Meller'),
(24, 1, 'Meller'),
(25, 1, 'Meller'),
(26, 1, 'Meller'),
(27, 1, 'Meller'),
(28, 1, 'Meller'),
(29, 1, 'Meller'),
(30, 1, 'Meller'),
(31, 1, 'Meller'),
(32, 1, 'Meller'),
(33, 1, 'Meller'),
(34, 1, 'Meller'),
(35, 1, 'Meller'),
(36, 1, 'Meller'),
(37, 1, 'Meller'),
(38, 2, 'Meller'),
(39, 2, 'Meller'),
(40, 2, 'Meller'),
(41, 2, 'Meller'),
(42, 2, 'Meller'),
(43, 2, 'Meller'),
(44, 2, 'Meller'),
(45, 2, 'Meller');

-- --------------------------------------------------------

--
-- Tabellstruktur `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `owner` varchar(21) NOT NULL,
  `actives` int(11) NOT NULL,
  `max_visits` int(11) NOT NULL,
  `title` varchar(21) NOT NULL,
  `groupid` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '0',
  `category` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `rooms`
--

INSERT INTO `rooms` (`id`, `owner`, `actives`, `max_visits`, `title`, `groupid`, `status`, `category`) VALUES
(1, 'Meller', 0, 15, 'Homeroom Club', 0, 1, 0),
(2, 'Meller', 1, 15, 'some shitty room', 0, 2, 0),
(3, 'Meller', 2, 40, 'i suck ass', 1, 1, 1),
(4, 'Meller', 1, 75, 'im great', 0, 0, 0);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `actives`
--
ALTER TABLE `actives`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Index för tabell `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `actives`
--
ALTER TABLE `actives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT för tabell `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT för tabell `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT för tabell `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
