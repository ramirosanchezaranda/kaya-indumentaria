-- Primero limpiamos la tabla
TRUNCATE TABLE productos RESTART IDENTITY;

-- Insertamos los productos
INSERT INTO productos (nombre, imagen) VALUES
('Chaqueta Oversized', '/products/Monitos-Back.jpg'),
('Pantalón Cargo', '/products/remera-gatitoantipoli.jpg'),
('Camiseta Gráfica', '/products/SUMO-BACK.jpg');
