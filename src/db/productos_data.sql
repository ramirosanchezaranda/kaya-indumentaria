--
-- PostgreSQL database dump
--

-- Dumped from database version 16.6 (Ubuntu 16.6-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.6 (Ubuntu 16.6-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.productos (id, nombre, imagen, price) VALUES (1, 'Chaqueta Oversized', '/products/Monitos-Back.jpg', 89.99);
INSERT INTO public.productos (id, nombre, imagen, price) VALUES (2, 'Pantalón Cargo', '/products/remera-gatitoantipoli.jpg', 69.99);
INSERT INTO public.productos (id, nombre, imagen, price) VALUES (3, 'Camiseta Gráfica', '/products/SUMO-BACK.jpg', 39.99);
INSERT INTO public.productos (id, nombre, imagen, price) VALUES (4, 'Remera Gráfica', '/products/Monitos-Back.jpg', 99.99);
INSERT INTO public.productos (id, nombre, imagen, price) VALUES (5, 'Remera Gráfica', '/products/Monitos-Back.jpg', 99.99);
INSERT INTO public.productos (id, nombre, imagen, price) VALUES (6, 'Chaqueta Gráfica', '/products/SUMO-BACK.jpg', 39.99);
INSERT INTO public.productos (id, nombre, imagen, price) VALUES (7, 'Pantalón Gráfico', '/products/remera-gatitoantipoli.jpg', 59.99);
INSERT INTO public.productos (id, nombre, imagen, price) VALUES (8, 'Pantalón Oversized', '/products/SUMO-BACK.jpg', 49.99);
INSERT INTO public.productos (id, nombre, imagen, price) VALUES (9, 'Chaqueta Oversized', '/products/Monitos-Back.jpg', 89.99);


--
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

