const products = [
  {
    id: 1,
    name: "Blue & Black Check Shirt",
    price: 3500.00,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
    description: "A stylish men's shirt with a classic check pattern, suitable for casual and semi-formal occasions.",
    available: true
  },
  {
    id: 2,
    name: "Gigabyte Aorus Men Tshirt",
    price: 2900.00,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
    description: "A casual gaming T-shirt featuring the Aorus logo and a sleek design.",
    available: false
  },
  {
    id: 3,
    name: "Man Plaid Shirt",
    price: 4000.00,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
    description: "A timeless plaid shirt offering a comfortable fit for everyday wear.",
    available: true
  },
  {
    id: 4,
    name: "Man Short Sleeve Shirt",
    price: 2300.00,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    description: "A lightweight short-sleeve shirt perfect for warm weather and casual outings.",
    available: true
  },
  {
    id: 5,
    name: "Men Check Shirt",
    price: 3200.00,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
    description: "A classic check shirt with a smart and versatile appearance.",
    available: true
  },
  {
    id: 6,
    name: "Nike Air Jordan 1 Red And Black",
    price: 17500.00,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
    description: "Iconic red and black basketball sneakers with a distinctive design.",
    available: true
  },
  {
    id: 7,
    name: "Nike Baseball Cleats",
    price: 9500.00,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
    description: "Baseball cleats designed for traction, stability, and athletic performance.",
    available: true
  },
  {
    id: 8,
    name: "Puma Future Rider Trainers",
    price: 10500.00,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    description: "Retro-inspired trainers combining modern comfort with everyday style.",
    available: true
  },
  {
    id: 9,
    name: "Sports Sneakers Off White & Red",
    price: 14000.00,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
    description: "Sporty sneakers combining off-white and red colors for a bold look.",
    available: false
  },
  {
    id: 10,
    name: "Sports Sneakers Off White Red",
    price: 12800.00,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
    description: "Comfortable off-white and red sneakers designed for casual occasions.",
    available: true
  },
  {
    id: 11,
    name: "Blue Frock",
    price: 3500.00,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp",
    description: "A charming blue dress with a comfortable design for different occasions.",
    available: true
  },
  {
    id: 12,
    name: "Girl Summer Dress",
    price: 2300.00,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp",
    description: "A lightweight summer dress designed for warm weather and casual outings.",
    available: true
  },
  {
    id: 13,
    name: "Gray Dress",
    price: 4000.00,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp",
    description: "A versatile gray dress suitable for both casual and formal styling.",
    available: true
  },
  {
    id: 14,
    name: "Short Frock",
    price: 2900.00,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp",
    description: "A fashionable short frock combining a playful look with comfort.",
    available: true
  },
  {
    id: 15,
    name: "Tartan Dress",
    price: 4600.00,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp",
    description: "A classic tartan-patterned dress with a timeless and sophisticated style.",
    available: true
  },
  {
    id: 16,
    name: "Black Women's Gown",
    price: 15000.00,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
    description: "An elegant black evening gown ideal for formal events and special occasions.",
    available: true
  },
  {
    id: 17,
    name: "Corset Leather With Skirt",
    price: 10500.00,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp",
    description: "A bold outfit featuring a stylish leather corset and matching skirt.",
    available: true
  },
  {
    id: 18,
    name: "Corset With Black Skirt",
    price: 9300.00,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp",
    description: "A coordinated outfit pairing a fashionable corset with a black skirt.",
    available: true
  },
  {
    id: 19,
    name: "Dress Pea",
    price: 5800.00,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp",
    description: "A playful dress with a distinctive pattern for casual everyday wear.",
    available: true
  },
  {
    id: 20,
    name: "Marni Red & Black Suit",
    price: 21000.00,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp",
    description: "A sophisticated red and black suit with a bold, modern design.",
    available: true
  },
  {
    id: 21,
    name: "Black & Brown Slipper",
    price: 2300.00,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp",
    description: "Comfortable black and brown slippers suitable for relaxed everyday wear.",
    available: true
  },
  {
    id: 22,
    name: "Calvin Klein Heel Shoes",
    price: 9500.00,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp",
    description: "Elegant heel shoes designed to complement formal outfits.",
    available: true
  },
  {
    id: 23,
    name: "Golden Shoes Woman",
    price: 5800.00,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp",
    description: "Stylish golden shoes that add a glamorous touch to special occasions.",
    available: true
  },
  {
    id: 24,
    name: "Pampi Shoes",
    price: 3500.00,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp",
    description: "Versatile shoes combining everyday comfort with a trendy appearance.",
    available: true
  },
  {
    id: 25,
    name: "Red Shoes",
    price: 4000.00,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp",
    description: "Bold red shoes suitable for parties, casual outings, and stylish outfits.",
    available: false
  },
  {
    id: 26,
    name: "Classic White Sneakers",
    price: 7000.00,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    description: "Classic white sneakers designed to complement casual everyday outfits.",
    available: true
  },
  {
    id: 27,
    name: "Casual Summer Shirt",
    price: 2700.00,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    description: "A breathable casual shirt suitable for summer activities.",
    available: true
  },
  {
    id: 28,
    name: "Elegant Evening Dress",
    price: 11800.00,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
    description: "An elegant evening dress for celebrations and formal occasions.",
    available: true
  },
  {
    id: 29,
    name: "Everyday Women's Shoes",
    price: 4600.00,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp",
    description: "Comfortable everyday shoes with a versatile design.",
    available: true
  },
  {
    id: 30,
    name: "Modern Plaid Outfit",
    price: 5200.00,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp",
    description: "A modern plaid-inspired outfit for a stylish and comfortable look.",
    available: true
  }
];

export async function product() {
  return (products);
}

export async function productid(id) {
  return products.find((d) => d.id === Number(id));
}