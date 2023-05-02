-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Maio-2023 às 03:50
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbpukks`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbcarrinho_de_compras`
--

CREATE TABLE `tbcarrinho_de_compras` (
  `codCarrinho` int(11) NOT NULL,
  `codProduto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `dataAdd` date NOT NULL,
  `codUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbendereco`
--

CREATE TABLE `tbendereco` (
  `logradouro` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `complemento` varchar(20) NOT NULL,
  `bairro` varchar(20) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `codigoPostal` varchar(8) NOT NULL,
  `codUser` int(11) NOT NULL,
  `nome` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbendereco`
--

INSERT INTO `tbendereco` (`logradouro`, `numero`, `complemento`, `bairro`, `cidade`, `estado`, `codigoPostal`, `codUser`, `nome`) VALUES
('Rua Professor Antônio Teófilo Cunha', 12345, '', 'São Bernados', 'Campo Grande', 'MS', '79075-15', 1, 'João Gomes'),
('sddasadd', 12, 'sdsd', 'sdasdsd', 'ptos', 'pb', '123465', 1, 'olamundo'),
('sdsdaasdfsads', 12, 'sddsaa', 'sdd', 'sdsdassd', 'pb', '19029876', 21, 'olamundo'),
('asdasdasdads', 123, 'sddsdfsafg', 'asdadsasad', 'patos', 'pb', '12345', 30, 'olamundo'),
('Avenida de Gansos', 157, 'perto do zz', 'Pateiros', 'Patos', 'PB', '6102-12', 31, 'olamundo'),
('Avenida de Gansos', 157, 'perto do zz', 'Pateiros', 'Patos', 'PB', '6102-12', 31, 'Jettin Paraibense Jr'),
('Alto ', 157, 'bala', 'Centro', 'Guaiuba', 'CE', '67801-17', 33, 'Kauan Clelton Cearesense'),
('dwasdwasd', 172, 'wdsawd', 'wdsaw', 'gaiaba', 'CE', 'wdsawdsw', 34, 'aaaaaa aaaaawdw'),
('wasdwasdwa', 123, 'asdwa', 'dwasdwa', 'DWASD', 'EA', 'wdsawdsa', 35, 'wdasdwa wdasawdsaw'),
('', 0, '', '', '', '', '', 36, ' '),
('', 0, '', '', '', '', '', 36, ' '),
('', 0, '', '', '', '', '', 36, ' '),
('', 290, 'perto do zz', 'Guaiuba BAr', 'Guaiuba', 'CE', '67801-17', 39, 'Chirslan Delas'),
('Avenida Governador Faustino de Albuquerq', 10204, 'próximo ao deposito ', 'Centro', 'PACATUBA', 'CE', '61801-17', 45, ''),
('999999', 99999, '213', '9999123', 'PACAS', 'CE', '99999-99', 47, ''),
('312321312', 31231, '3213123', '3123123', 'WASDWWA', 'CE', '31232-31', 48, ''),
('312312', 31232, '3123', '312312', 'DWASDW', 'CA', '23132-23', 49, ''),
('No mato', 12323, 'perto do zz', 'Pateiros', 'GAIBAS', 'BG', '31239-81', 50, ''),
('dwsasdw', 31232, 'cassa', 'patos', 'PACATUBA', 'CE', '31232-12', 52, ''),
('wdasdw', 31231, 'wdsawd', 'dwasdwa', 'WDWSA', 'CE', '32132-13', 53, ''),
('dwasdwawd', 33131, 'wdsawd', 'wdsawd', 'PACATUBA', 'CE', '41451-51', 76, ''),
('wdasdwas', 12312, 'wdsawd', 'centro', 'WASDW', 'WA', '31231-23', 77, ''),
('wd', 31321, 'dwds', 'dwasdwa', 'WASDWA', 'WD', '31321-31', 80, ''),
('dwasdwas', 31232, 'wasdwa', 'dwawsd', 'DWASDW', 'WC', '31231-23', 82, ''),
('wdwa', 31321, 'wwd', 'dwasdw', 'WDWASD', 'DW', '31321-31', 84, ''),
('12312312', 32132, 'wdwasdw', 'dwasdwa', 'WDWASDW', 'WD', '31231-31', 85, ''),
('wdwasdw', 31231, 'dwasdwas', 'wdwasdw', 'CWADWAAS', 'WD', '31323-13', 86, ''),
('dwadw', 31321, 'wdasdw', 'wdasdwa', 'WDASDW', 'WD', '12321-31', 87, '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbimagens`
--

CREATE TABLE `tbimagens` (
  `codImagem` int(11) NOT NULL,
  `nome_arquivo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `data_upload` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbimagens`
--

INSERT INTO `tbimagens` (`codImagem`, `nome_arquivo`, `url`, `data_upload`) VALUES
(1, NULL, 'uploads/produtos/64503d1028394.png', '2023-05-01 19:28:32'),
(2, NULL, 'uploads/produtos/64503fc15b2b6.png', '2023-05-01 19:40:01'),
(3, NULL, 'uploads/produtos/6450404730ef1.jpg', '2023-05-01 19:42:15'),
(4, NULL, 'uploads\\produtos\\5AA0AAB30FD98FF4FE37579A07A558CB_thumbnail_600x.jpg', '2023-05-01 19:54:31'),
(5, NULL, 'uploads/produtos/64505dbcb9e1f.png', '2023-05-01 21:47:56'),
(6, NULL, 'uploads/produtos/6450602392877.png', '2023-05-01 21:58:11'),
(7, NULL, 'uploads/produtos/6450607f34d15.png', '2023-05-01 21:59:43'),
(8, NULL, 'uploads/produtos/6450613602f7b.png', '2023-05-01 22:02:46'),
(9, NULL, 'uploads/produtos/6450619953987.png', '2023-05-01 22:04:25'),
(10, NULL, 'uploads/produtos/645062b74c115.png', '2023-05-01 22:09:11'),
(11, NULL, 'uploads/produtos/645062e43e105.png', '2023-05-01 22:09:56'),
(12, NULL, 'uploads/produtos/64506322b187a.png', '2023-05-01 22:10:58'),
(13, NULL, 'uploads/produtos/6450635926301.png', '2023-05-01 22:11:53'),
(14, NULL, 'uploads\\produtos\\1960404065AC65B2D23671E456290CE8_thumbnail_600x.jpg', '2023-05-01 22:12:55'),
(15, NULL, 'uploads/produtos/645063f5575ce.png', '2023-05-01 22:14:29'),
(16, NULL, 'uploads/produtos/6450641b19e0d.png', '2023-05-01 22:15:07'),
(17, NULL, 'uploads/produtos/6450644297b30.png', '2023-05-01 22:15:46'),
(18, NULL, 'uploads/produtos/64506477b720a.png', '2023-05-01 22:16:39'),
(19, NULL, 'uploads/produtos/6450649acedc0.png', '2023-05-01 22:17:14'),
(20, NULL, 'uploads/produtos/645064ea5c49e.png', '2023-05-01 22:18:34'),
(21, NULL, 'uploads/produtos/6450651db692d.png', '2023-05-01 22:19:25'),
(22, NULL, 'uploads/produtos/645065551908e.png', '2023-05-01 22:20:21'),
(23, NULL, 'uploads/produtos/6450657d49a9f.png', '2023-05-01 22:21:01'),
(24, NULL, 'uploads/produtos/645065d686f03.png', '2023-05-01 22:22:30');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbpedido`
--

CREATE TABLE `tbpedido` (
  `numPedido` int(11) NOT NULL,
  `dataCriacao` datetime NOT NULL DEFAULT current_timestamp(),
  `dataEnvio` date NOT NULL,
  `nomeCliente` int(11) NOT NULL,
  `numCliente` int(11) NOT NULL,
  `estado` char(2) NOT NULL,
  `numEnvio` int(11) NOT NULL,
  `status_pedido` varchar(10) NOT NULL,
  `codUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbprodutos`
--

CREATE TABLE `tbprodutos` (
  `codProduto` int(11) NOT NULL,
  `nomeProduto` varchar(140) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `marca` varchar(20) NOT NULL,
  `tipo` varchar(70) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `genero` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbprodutos`
--

INSERT INTO `tbprodutos` (`codProduto`, `nomeProduto`, `categoria`, `marca`, `tipo`, `preco`, `genero`) VALUES
(1, 'Moda Masculina Celina Padrão de mouse de manga curta NOT TODAY', 'Camiseta', 'Moda Masculina Celin', 'Casual', '49.99', 'masculino'),
(2, 'Camisetas Basica Lisas Manga Curta 100% Algodao Fio 30,1 Penteada', 'Camiseta', 'Shein', 'Casual', '25.99', 'masculino'),
(3, 'Camisetas Basica Lisas Manga Curta 100% Algodao Fio 30,1 Penteada', 'Camiseta', 'Shein', 'Casual', '25.99', 'masculino'),
(4, 'Blusa de Frio Moletom Aberto Com Zíper Masculino Flanelado Com Capuz e Bolso Lisa FORRO DE CHEPÉU PRETO E BRANCO ENVIA ALEATÓRIO', 'Camiseta', 'Dylan', 'Casual', '159.90', 'masculino'),
(5, 'SHEIN EZwear Calças cargo lado do bolso da aba bainha com cordão', 'Calça', 'Shein', 'Street', '80.99', 'feminino'),
(6, 'Jaqueta Puffer em Nylon Unissex Com Forro Peluciado Capuz Removível', 'Jaqueta', 'Shein', 'Street', '38.20', 'feminino'),
(7, 'Free Jeans Calça Wide Leg Jeans Preta', 'Calça', 'Dylan', 'Street', '49.99', 'feminino'),
(8, 'SHEIN Unity Vestido com capuz meio botão bainha dividida cordão', 'Moletom', 'Shein', 'Casual', '38.20', 'feminino'),
(9, 'parka feminina feopulda com capuz removivel - Barcelona', 'Jaqueta', 'Categóricas', 'Casual', '159.90', 'feminino'),
(10, 'W&L casaco moletom IMPORTADO cardigan moletom masculino com chapéu moda casual', 'Camiseta', 'Shein', 'Casual', '49.99', 'masculino'),
(11, 'SHEIN homens Moletons carta gráfica', 'Moletom', 'Shein', 'Casual', '38.20', 'masculino'),
(12, 'homens Shorts carta corrigida cintura com cordão', 'Short', 'Shein', 'Casual', '25.99', 'masculino'),
(13, 'homens Shorts guarnição listrada cintura com cordão', 'Calça', 'Dylan', 'Casual', '49.99', 'masculino'),
(14, 'Alan Moda calça moletom masculina preta', 'Calça', 'Moda Masculina Celin', 'Street', '49.99', 'masculino'),
(15, 'homens Camiseta sólido gola redonda', 'Camiseta', 'Shein', 'Casual', '49.99', 'masculino'),
(16, 'TLT Modas 3 CAMISETAS BASICA MASCULINA DIA A DIA', 'Camiseta', 'TLT MODAS', 'Casual', '49.99', 'masculino'),
(17, 'SHEIN EZwear Cordão Bolso Bloco de cores ocasional Suéter', 'Moletom', 'Shein', 'Casual', '159.90', 'masculino'),
(18, 'Mais Vestido camisa Manga de guia de rolo', 'Vestido', 'Dylan', 'Casual', '49.99', 'feminino'),
(19, 'SHEIN VCAY Mais Botão frontal Detalhe dobrado Manga de Asa de Morcego Vestido camisa', 'Vestido', 'Shein', 'Casual', '80.99', 'feminino'),
(20, 'Casaco Duplo Capuz Inverno Feminino Sobretudo Max Bolsos Teddy Pelinho Elegante', 'Jaqueta', 'Shein', 'Street', '159.90', 'feminino'),
(21, 'EMERY ROSE Casaco com capuz estampado xadrez', 'Moletom', 'TLT MODAS', 'Street', '38.20', 'feminino'),
(22, 'SHEIN EZwear Carta Calça de moletom feminina', 'Calça', 'Shein', 'Casual', '159.90', 'feminino'),
(23, 'SHEIN Unity Malhado Simples elegante Camisola', 'Camisola', 'Categóricas', 'Street', '159.90', 'feminino'),
(24, 'SHEIN EZwear Moletom com forro térmico com letras', 'Moletom', 'Shein', 'Street', '49.99', 'feminino');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbproduto_imagem`
--

CREATE TABLE `tbproduto_imagem` (
  `codProduto` int(11) DEFAULT NULL,
  `codImagem` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbproduto_imagem`
--

INSERT INTO `tbproduto_imagem` (`codProduto`, `codImagem`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),
(21, 21),
(22, 22),
(23, 23),
(24, 24);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbusuario`
--

CREATE TABLE `tbusuario` (
  `codUser` int(11) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `telefone` char(14) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `sobrenome` varchar(70) NOT NULL,
  `email` varchar(60) NOT NULL,
  `dataCadastro` date NOT NULL DEFAULT current_timestamp(),
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbusuario`
--

INSERT INTO `tbusuario` (`codUser`, `senha`, `telefone`, `nome`, `sobrenome`, `email`, `dataCadastro`, `admin`) VALUES
(1, '123456789', '8591234-1234', 'João Gomes', 'Pereira Souza', 'joaogomes123@gmail.com', '2023-03-11', 0),
(3, 'julio', '85859918213', 'Júlio Levy', 'Chaves de Oliveira', 'juliolevy45@gmail.com', '2023-03-19', 0),
(5, 'joao', '8591234-1234', 'João Victor', 'Barrento Rodrigues', 'joaovector@gmail.com', '2023-03-19', 0),
(6, '1234', '83996661637', 'asdasd', 'asdasd', 'gercinon073@gmail.com', '2023-03-21', 0),
(7, '123456', '83996661637', 'asdasdasdasda', 'asdasdasdasd', 'email@email.com.br', '2023-03-21', 0),
(15, '12345', 'sdasdad', 'dsfsdfsdff', 'sdfsds', 'sdfsdfsdf@asdaasd.com', '2023-03-21', 0),
(17, '1234', '83996661637', 'Gercino', 'Neto', 'rusi4n.hys.team@gmail.com', '2023-03-21', 0),
(19, '12345', '83996661637', 'klkaskdjsakds', 'slkfçlkdfsçfklçsldfs', 'sifu@email.com', '2023-03-21', 0),
(20, 'sdddsa', '83996661637', 'asdsd', 'sdfs', 'suporte@b7web.com.br', '2023-03-21', 0),
(21, 'dfdfsds', '83996661637', 'sdssds', 'sdsasssd', 'suporte@b7web.com', '2023-03-21', 0),
(30, 'sdasddsd', '83996661637', 'dsfsdfsdff', 'asdasd', 'gercinodev@gmail.com', '2023-03-21', 0),
(31, 'jettin', '(85)9120-1234', 'Jettin', 'Paraibano', 'jettin@gmail.com', '2023-03-22', 0),
(33, 'kauan', '(85)85991821', 'Kauan Clelton', 'Cearesense', 'kauanclelton@gmail.com', '2023-03-22', 0),
(34, '200319231', '85859918213', 'aaaaaa', 'aaaaawdw', 'wdsawdsa@gmail.com', '2023-03-22', 0),
(35, '123456', '858599182', 'wdasdwa', 'wdasawdsaw', 'juliolevy@gmail.com', '2023-03-22', 0),
(36, '', '', '', '', '', '2023-03-22', 0),
(39, 'makoa', '8585312341', 'Chirslan', 'Delas', 'chrislanius@gmail.com', '2023-03-22', 0),
(40, '$2y$10$jV8xXT05DRGqt', '(99) 99999-999', 'wasd', 'wasdwasd', 'wasd@gmail.com', '2023-04-29', 0),
(43, '$2y$10$KqcwMi3k0epgm', '(85) 85991-821', 'Júlio', 'Oliveira', 'juliolevy456@gmail.com', '2023-04-29', 0),
(45, '$2y$10$3Gg.cb3LmyA8x', '(85) 85991-821', 'Júlio', 'Oliveira', 'juliolevy4456@gmail.com', '2023-04-29', 1),
(47, '$2y$10$pXKHIKx7X2oX1', '(99) 99999-912', 'teste ', 'de login', 'testelogin@gmail.com', '2023-04-29', 0),
(48, '$2y$10$MfPlkrohYmwq0', '(85) 91203-902', 'wasdwasd', 'wasdwasd', 'teste@gmail.com', '2023-04-29', 0),
(49, '$2y$10$d4e21D2WlyCrjyPb5dwLW.77fr2lrYoaoIEcZihq.ShCEDi5DBVyG', '(23) 12312-321', 'wasdwa', 'dwasdwas', 'teste1@gmail.com', '2023-04-29', 0),
(50, '$argon2id$v=19$m=65536,t=4,p=1$dEM2a1RaL1E0SFp6Q0FwaQ$enCobc6PDHGT8KcIIWkWq6Hkoe1V54dTbCBo+B/woAs', '(92) 34324-234', 'xislan', 'els lan', 'chrislanius1@gmail.com', '2023-04-29', 0),
(52, '$argon2id$v=19$m=65536,t=4,p=1$cjRpeUJxTUVMLlhyNjBzZg$fLAKBieTjK4Qv3p4orJxZeQLRBO1aqAJz4ycIKd+iO4', '(99) 99999-999', 'junlio', 'lenvy', 'teste2@gmail.com', '2023-04-30', 0),
(53, '$argon2id$v=19$m=65536,t=4,p=1$c25UcWVyVDM1aU8vZUQ5RA$G1DXNnBBg3gZT3gqXU0MRxbpfqZQmGYJg5/YTu9DuTM', '(99)99999-9999', 'testess', 'wasdwas', 'wasdas@gmail.com', '2023-04-30', 0),
(54, '$argon2id$v=19$m=65536,t=4,p=1$Tm5ZV21ZZGJ0LjNnR1JUaQ$RazG4Jwx9gsrf6KpP1j28UinK+A+sP6MxZdpcBNMLtE', '(31)23132-1312', 'TESTANDO PDO ', 'ROLLBACK', 'WW232@gmail.com', '2023-04-30', 0),
(66, '$argon2id$v=19$m=65536,t=4,p=1$cXlWUGxybXZlNEUwSU5kbg$L7nyq7NdFzCmjtorqKj8YI1eCryN8dk9Bs0uILTOnAk', '(31)23123-1232', 'wdsawd', 'wdsawd', 'wdsawd@gmail.com', '2023-04-30', 0),
(76, '$argon2id$v=19$m=65536,t=4,p=1$WVZPZEhRVVRpckRITkEzRg$nFYJD7D9gppfDsQbG8lrml0mOaeCAkTMAj8AKSS6Lfo', '(31)32131-5671', 'wdwdsaw', 'dwasdw', 'dwasdwasd@gmail.com', '2023-04-30', 0),
(77, '$argon2id$v=19$m=65536,t=4,p=1$ank4ZnRENjdMakI3WnZVUA$zL4WkW07mGlZYsm+sTteNNir/G8NINJTVJYVr5c6Z/A', '(23)13213-1312', 'jolio', 'lenvy', 'julio@gmail.com', '2023-05-01', 0),
(80, '$argon2id$v=19$m=65536,t=4,p=1$OU9lMUh2QTJVRWtrZG9zUQ$u7+OfSTitp/6RLtQCs0WDd1tWdu6hG1klLWWW7sTq6I', '(31)23214-1542', 'dwasdw', 'dwasd', 'wasdwa@gmail.com', '2023-05-01', 0),
(82, '$argon2id$v=19$m=65536,t=4,p=1$dTA1a1Q1UlUxR0tGZVRPWA$zQ80krLpDC+I7VrPxMsOjiEGXri5OaCiREIOjOLsQHU', '(32)13251-2356', 'wdsaw', 'dwasd', 'wasdwasdwa@gmail.com', '2023-05-01', 0),
(84, '$argon2id$v=19$m=65536,t=4,p=1$d3QxM0szalJkNEpnaGUwMw$ZptrBQ3XAFcmyF1s7sQBriEOelDxJ7cyInFw54n3rhc', '(13)12313-2131', 'wdsawdw', 'wdasdwa', 'aaaaaaaaA1@gmail.com', '2023-05-01', 0),
(85, '$argon2id$v=19$m=65536,t=4,p=1$cGdzekRZRnBVUnRxS2ZOWA$BlMoc/o2qCAYGA6p5rnK8MHo1hbdwrj8HS53hbzc364', '(31)32131-2312', 'wdasdwasdwasd', 'wdsawdw', 'aaaaaaaaA1@hotmail.com', '2023-05-01', 0),
(86, '$argon2id$v=19$m=65536,t=4,p=1$eWNXT0xScFJBcGhiMy5OTQ$pD1AXEuMn5jnKwHP0970B/sO0PpzGNKDzreTGX6PHqk', '(31)32131-2331', 'wdasdwas', 'wdsawd', 'wasdwasdwas@gmail.com', '2023-05-01', 0),
(87, '$argon2id$v=19$m=65536,t=4,p=1$emdXOWJ1Y2NwR1lKWlVkdw$oXJXi0ht4Nn/y4CBmKTL69TQ4qmMUSCPum9mEGk3seI', '(32)13215-1612', 'dwasdw', 'wasdwasd', 'aaaaaaaaA1@yahoo.com', '2023-05-01', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbcarrinho_de_compras`
--
ALTER TABLE `tbcarrinho_de_compras`
  ADD PRIMARY KEY (`codCarrinho`),
  ADD KEY `codProduto_fk` (`codProduto`) USING BTREE,
  ADD KEY `codUser_fk` (`codUser`) USING BTREE;

--
-- Índices para tabela `tbendereco`
--
ALTER TABLE `tbendereco`
  ADD KEY `codUser` (`codUser`);

--
-- Índices para tabela `tbimagens`
--
ALTER TABLE `tbimagens`
  ADD PRIMARY KEY (`codImagem`);

--
-- Índices para tabela `tbpedido`
--
ALTER TABLE `tbpedido`
  ADD PRIMARY KEY (`numPedido`),
  ADD KEY `codUser` (`codUser`);

--
-- Índices para tabela `tbprodutos`
--
ALTER TABLE `tbprodutos`
  ADD PRIMARY KEY (`codProduto`);

--
-- Índices para tabela `tbproduto_imagem`
--
ALTER TABLE `tbproduto_imagem`
  ADD KEY `codProduto` (`codProduto`),
  ADD KEY `codImagem` (`codImagem`);

--
-- Índices para tabela `tbusuario`
--
ALTER TABLE `tbusuario`
  ADD PRIMARY KEY (`codUser`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbimagens`
--
ALTER TABLE `tbimagens`
  MODIFY `codImagem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `tbprodutos`
--
ALTER TABLE `tbprodutos`
  MODIFY `codProduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `tbusuario`
--
ALTER TABLE `tbusuario`
  MODIFY `codUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tbcarrinho_de_compras`
--
ALTER TABLE `tbcarrinho_de_compras`
  ADD CONSTRAINT `tbcarrinho_de_compras_ibfk_1` FOREIGN KEY (`codUser`) REFERENCES `tbusuario` (`codUser`);

--
-- Limitadores para a tabela `tbendereco`
--
ALTER TABLE `tbendereco`
  ADD CONSTRAINT `tbendereco_ibfk_1` FOREIGN KEY (`codUser`) REFERENCES `tbusuario` (`codUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `tbendereco_ibfk_2` FOREIGN KEY (`codUser`) REFERENCES `tbusuario` (`codUser`);

--
-- Limitadores para a tabela `tbpedido`
--
ALTER TABLE `tbpedido`
  ADD CONSTRAINT `tbpedido_ibfk_1` FOREIGN KEY (`codUser`) REFERENCES `tbusuario` (`codUser`),
  ADD CONSTRAINT `tbpedido_ibfk_2` FOREIGN KEY (`codUser`) REFERENCES `tbusuario` (`codUser`);

--
-- Limitadores para a tabela `tbproduto_imagem`
--
ALTER TABLE `tbproduto_imagem`
  ADD CONSTRAINT `tbproduto_imagem_ibfk_1` FOREIGN KEY (`codProduto`) REFERENCES `tbprodutos` (`codProduto`),
  ADD CONSTRAINT `tbproduto_imagem_ibfk_2` FOREIGN KEY (`codImagem`) REFERENCES `tbimagens` (`codImagem`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
