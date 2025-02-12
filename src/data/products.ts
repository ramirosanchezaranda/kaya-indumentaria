export const products = [
  {
    id: 1,
    name: 'Chaqueta Oversized',
    price: 89.99,
    image: '/products/Monitos-Back.jpg', // Ruta absoluta
    description: 'Chaqueta oversized con diseño brutalista. Confeccionada en algodón de alta calidad con detalles industriales y costuras expuestas. Perfecta para un look urbano y contemporáneo.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Pantalón Cargo',
    price: 69.99,
    image: '/products/remera-gatitoantipoli.jpg', // Ruta absoluta
    description: 'Pantalón cargo con múltiples bolsillos y detalles técnicos. Diseño versátil y funcional con un toque brutalista distintivo.',
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: 3,
    name: 'Camiseta Gráfica',
    price: 39.99,
    image: '/products/SUMO-BACK.jpg', // Ruta absoluta
    description: 'Camiseta con diseño gráfico exclusivo inspirado en la arquitectura brutalista. 100% algodón orgánico con corte relajado.',
    sizes: ['S', 'M', 'L', 'XL']
  }
] as const;