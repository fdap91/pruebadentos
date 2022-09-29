-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2022 a las 07:01:41
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_dentos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog`
--

CREATE TABLE `blog` (
  `idblog` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `createdate` varchar(30) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`idblog`, `idusuario`, `titulo`, `descripcion`, `createdate`, `status`) VALUES
(1, 1, 'Primer Blog', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec orci vitae nisi laoreet iaculis. Phasellus vulputate nec eros a laoreet. Mauris finibus risus ut feugiat laoreet. Integer molestie velit tellus, eget laoreet justo sodales at. Vivamus a orci consequat, lacinia ante ut, tincidunt velit. Vivamus consectetur purus vel venenatis rhoncus. Nulla quam odio, luctus sit amet tellus id, tincidunt sagittis odio. Donec ac porttitor sem. Duis porttitor semper magna ac commodo. Nunc facilisis purus massa, et laoreet augue vulputate in. Integer maximus elit id justo pharetra eleifend. Pellentesque imperdiet neque eget nibh scelerisque consequat. Curabitur vehicula arcu at magna condimentum, eu tempor nisi eleifend. Nullam dolor ante, pellentesque sed erat id, consectetur tincidunt metus.', '2022-09-28', 1),
(2, 1, 'Segundo Blog', 'Vestibulum lacinia pellentesque sapien, vitae auctor ipsum elementum non. Vivamus sodales consequat vehicula. Suspendisse consectetur elementum mi non tempor. Etiam augue ex, hendrerit lobortis nulla a, maximus viverra enim. Mauris imperdiet mi ante, et mattis mauris mollis a. Maecenas tellus elit, dapibus eu felis id, tincidunt tempus dolor. In in nunc malesuada, fringilla justo non, convallis diam. Vivamus quis lobortis felis, at rutrum tellus. Nullam rutrum eget massa a dictum. Integer hendrerit elementum malesuada. Sed vel pretium enim, non dapibus dolor. Aenean eu varius felis. Vestibulum vestibulum vestibulum mauris et sollicitudin. Quisque eu sapien dui. Ut in auctor erat. Aenean viverra ultrices neque, ut gravida nulla consectetur aliquet.', '2022-09-28', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `fechanacimiento` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tipousuario` varchar(1) NOT NULL,
  `createdate` varchar(30) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `nombre`, `apellido`, `correo`, `fechanacimiento`, `password`, `tipousuario`, `createdate`, `status`) VALUES
(1, 'Admin', 'Admin', 'admin@admin.com', '2022-09-28', '$2y$10$WI1EjVWkOA5x58goWcQo5e2W0..5dv4bDBxVQib8PK7Xaojg5PtWG', 'A', '2022-09-28', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`idblog`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blog`
--
ALTER TABLE `blog`
  MODIFY `idblog` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
