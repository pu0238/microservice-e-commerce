import { ElectronicsProduct } from './electronics.entity';

export const ELECTRONICS_SERVICE = 'ELECTRONICS_SERVICE';

export const products: ElectronicsProduct[] = [
  {
    id: '89a8c47d-2a56-4c53-92f1-83c19b0f77c1',
    name: 'Apple iPhone 13 Pro Max',
    description:
      'The iPhone 13 Pro Max is the latest and greatest from Apple, with a stunning 6.7-inch Super Retina XDR display, A15 Bionic chip, and 5G connectivity.',
    category: 'Smartphones',
    price: 1299.99,
    image: 'https://example.com/iphone-13-pro-max.jpg',
  },
  {
    id: 'd7baf09a-54bb-4de6-8b0a-14101f31b7a1',
    name: 'Samsung Galaxy S21 Ultra',
    description:
      'The Galaxy S21 Ultra is a powerful smartphone from Samsung, with a 6.8-inch Dynamic AMOLED 2X display, Exynos 2100 chipset, and 5G connectivity.',
    category: 'Smartphones',
    price: 1199.99,
    image: 'https://example.com/galaxy-s21-ultra.jpg',
  },
  {
    id: '743408af-6483-4d3a-8ed8-9191a4c4e71d',
    name: 'Sony PlayStation 5',
    description:
      'The PlayStation 5 is the latest gaming console from Sony, featuring lightning-fast load times, haptic feedback, and immersive 3D audio.',
    category: 'Gaming Consoles',
    price: 499.99,
    image: 'https://example.com/playstation-5.jpg',
  },
  {
    id: '2a874a54-f5ed-4c13-a9d7-88f83d154eea',
    name: 'Microsoft Xbox Series X',
    description:
      'The Xbox Series X is the latest gaming console from Microsoft, with a custom AMD Zen 2 processor, 4K gaming at 60fps, and support for ray tracing.',
    category: 'Gaming Consoles',
    price: 499.99,
    image: 'https://example.com/xbox-series-x.jpg',
  },
  {
    id: 'fc7c988d-6d24-48a8-8a10-1f9b6f4c72af',
    name: 'Apple MacBook Pro 16-inch',
    description:
      'The MacBook Pro 16-inch is a powerful laptop from Apple, with a 16-inch Retina display, 9th-generation Intel Core processors, and up to 64GB of RAM.',
    category: 'Laptops',
    price: 2399.99,
    image: 'https://example.com/macbook-pro-16.jpg',
  },
  {
    id: '90a1d9a9-54e7-44b8-b765-d7f515ddc29e',
    name: 'Dell XPS 15',
    description:
      'The Dell XPS 15 is a high-performance laptop, featuring a 15.6-inch InfinityEdge display, 11th-gen Intel Core processors, and up to 64GB of RAM.',
    category: 'Laptops',
    price: 1599.99,
    image: 'https://example.com/d',
  },
  {
    id: 'f9d9f8a8-6dd2-4d53-8211-3d3bf8640263',
    name: 'Samsung QN90A Neo QLED TV',
    description:
      'The Samsung QN90A is a top-of-the-line TV with a 4K resolution, 120Hz refresh rate, and Quantum Matrix technology for incredible color and contrast.',
    category: 'Televisions',
    price: 1999.99,
    image: 'https://example.com/samsung-qn90a.jpg',
  },
  {
    id: 'f23e86b9-20b2-4b53-88d8-0ce3dfc3546c',
    name: 'LG OLED C1 TV',
    description:
      'The LG OLED C1 is a stunning TV with perfect blacks, infinite contrast, and Dolby Vision IQ for an amazing HDR experience.',
    category: 'Televisions',
    price: 2199.99,
    image: 'https://example.com/lg-oled-c1.jpg',
  },
  {
    id: '96e6622c-d540-4440-9502-8cb3f04b1e12',
    name: 'Bose QuietComfort 35 II',
    description:
      'The Bose QuietComfort 35 II are wireless noise-canceling headphones, with up to 20 hours of battery life and Alexa voice control.',
    category: 'Headphones',
    price: 299.99,
    image: 'https://example.com/bose-quietcomfort-35-ii.jpg',
  },
  {
    id: 'b6f9b9e5-ba0f-42f5-b6c5-b5b67ba21efc',
    name: 'Sony WH-1000XM4',
    description:
      'The Sony WH-1000XM4 are premium wireless headphones, with industry-leading noise cancellation, 30 hours of battery life, and support for LDAC.',
    category: 'Headphones',
    price: 349.99,
    image: 'https://example.com/sony-wh-1000xm4.jpg',
  },
  {
    id: 'd64024d8-7a23-4f84-b7ad-4f4c17d50510',
    name: 'Fitbit Charge 5',
    description:
      'The Fitbit Charge 5 is a fitness tracker with a sleek design, advanced health metrics, and up to 7 days of battery life.',
    category: 'Fitness Trackers',
    price: 179.99,
    image: 'https://example.com/fitbit-charge-5.jpg',
  },
  {
    id: '1d040a33-56c1-4f69-a249-9a22f51fae98',
    name: 'Garmin Forerunner 945',
    description:
      'The Garmin Forerunner 945 is a high-end GPS smartwatch, with built-in music storage, advanced performance metrics, and up to 2 weeks of battery life.',
    category: 'Smartwatches',
    price: 599.99,
    image: 'https://example.com/garmin-forerunner-945.jpg',
  },
  {
    id: 'fa5c5e5d-2cf1-4468-8d20-14b0d9b2f1b8',
    name: 'GoPro HERO10 Black',
    description:
      'The GoPro HERO10 Black is an action camera with HyperSmooth 4.0 video stabilization, 5.3K video resolution, and 20MP photos.',
    category: 'Action Cameras',
    price: 499.99,
    image: 'https://example.com/gopro-hero10-black.jpg',
  },
  {
    id: 'e40c5469-0839-4c92-8b19-49f0a828a747',
    name: 'Apple AirPods Pro',
    description:
      'The Apple AirPods Pro are wireless earbuds with active noise cancellation, adaptive EQ, and up to 4.5 hours of battery life on a single charge.',
    category: 'Earbuds',
    price: 249.99,
    image: 'https://example.com/apple-airpods-pro.jpg',
  },
  {
    id: '567e342f-dde7-4ca8-baf9-47eaa9a0e697',
    name: 'Samsung Galaxy Watch 4',
    description:
      'The Samsung Galaxy Watch 4 is a smartwatch with a stylish design, advanced fitness features, and up to 40 hours of battery life.',
    category: 'Smartwatches',
    price: 249.99,
    image: 'https://example.com/samsung-galaxy-watch-4.jpg',
  },
  {
    id: 'c6b5a6b5-5a5f-4a15-877f-b025b9a2d712',
    name: 'Logitech MX Master 3',
    description:
      'The Logitech MX Master 3 is a wireless mouse with a comfortable ergonomic design, advanced features for productivity, and up to 70 days of battery life.',
    category: 'Mice',
    price: 99.99,
    image: 'https://example.com/logitech-mx-master-3.jpg',
  },
  {
    id: '4cb4b888-c8d7-4e33-9f7c-6b5638cc7d9f',
    name: 'Razer Blade 15',
    description:
      'The Razer Blade 15 is a high-performance gaming laptop with a 15.6-inch Full HD display, NVIDIA GeForce RTX graphics, and up to 16GB of RAM.',
    category: 'Laptops',
    price: 1499.99,
    image: 'https://example.com/razer-blade-15.jpg',
  },
  {
    id: '11a927a6-1d27-44c6-85e2-c90a732a2519',
    name: 'Microsoft Surface Book 3',
    description:
      'The Microsoft Surface Book 3 is a versatile 2-in-1 laptop with a detachable touchscreen, up to 32GB of RAM, and a dedicated NVIDIA graphics card.',
    category: 'Laptops',
    price: 1799.99,
    image: 'https://example.com/microsoft-surface-book-3.jpg',
  },
  {
    id: 'ccf55468-aa1e-4d7c-96b6-3c88ec19fdd3',
    name: 'DJI Mavic Air 2S',
    description:
      'The DJI Mavic Air 2S is a compact drone with a 1-inch CMOS sensor, 5.4K video resolution, and up to 31 minutes of flight time.',
    category: 'Drones',
    price: 999.99,
    image: 'https://example.com/dji-mavic-air-2s.jpg',
  },
  {
    id: 'a857b042-310e-4b6d-8d38-09b0cb2386e1',
    name: 'Sony WH-1000XM4',
    description:
      'The Sony WH-1000XM4 are wireless noise-cancelling headphones with up to 30 hours of battery life, advanced sound features, and comfortable ear pads.',
    category: 'Headphones',
    price: 349.99,
    image: 'https://example.com/sony-wh-1000xm4.jpg',
  },
];
