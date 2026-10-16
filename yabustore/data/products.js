 const products = [
  {
    id: 83,
    name: "Blue & Black Check Shirt",
    price: 29.99,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
    description: "A stylish men's shirt with a classic check pattern, suitable for casual and semi-formal occasions.",
    available: true
  },
  {
    id: 84,
    name: "Gigabyte Aorus Men Tshirt",
    price: 24.99,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
    description: "A casual gaming T-shirt featuring the Aorus logo and a sleek design.",
    available: true
  },
  {
    id: 85,
    name: "Man Plaid Shirt",
    price: 34.99,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
    description: "A timeless plaid shirt offering a comfortable fit for everyday wear.",
    available: true
  },
  {
    id: 86,
    name: "Man Short Sleeve Shirt",
    price: 19.99,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    description: "A lightweight short-sleeve shirt perfect for warm weather and casual outings.",
    available: true
  },
  {
    id: 87,
    name: "Men Check Shirt",
    price: 27.99,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
    description: "A classic check shirt with a smart and versatile appearance.",
    available: true
  },
  {
    id: 88,
    name: "Nike Air Jordan 1 Red And Black",
    price: 149.99,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
    description: "Iconic red and black basketball sneakers with a distinctive design.",
    available: true
  },
  {
    id: 89,
    name: "Nike Baseball Cleats",
    price: 79.99,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
    description: "Baseball cleats designed for traction, stability, and athletic performance.",
    available: true
  },
  {
    id: 90,
    name: "Puma Future Rider Trainers",
    price: 89.99,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    description: "Retro-inspired trainers combining modern comfort with everyday style.",
    available: true
  },
  {
    id: 91,
    name: "Sports Sneakers Off White & Red",
    price: 119.99,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
    description: "Sporty sneakers combining off-white and red colors for a bold look.",
    available: true
  },
  {
    id: 92,
    name: "Sports Sneakers Off White Red",
    price: 109.99,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
    description: "Comfortable off-white and red sneakers designed for casual occasions.",
    available: true
  },
  {
    id: 162,
    name: "Blue Frock",
    price: 29.99,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp",
    description: "A charming blue dress with a comfortable design for different occasions.",
    available: true
  },
  {
    id: 163,
    name: "Girl Summer Dress",
    price: 19.99,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp",
    description: "A lightweight summer dress designed for warm weather and casual outings.",
    available: true
  },
  {
    id: 164,
    name: "Gray Dress",
    price: 34.99,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp",
    description: "A versatile gray dress suitable for both casual and formal styling.",
    available: true
  },
  {
    id: 165,
    name: "Short Frock",
    price: 24.99,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp",
    description: "A fashionable short frock combining a playful look with comfort.",
    available: true
  },
  {
    id: 166,
    name: "Tartan Dress",
    price: 39.99,
    category: "tops",
    image: "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp",
    description: "A classic tartan-patterned dress with a timeless and sophisticated style.",
    available: true
  },
  {
    id: 177,
    name: "Black Women's Gown",
    price: 129.99,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
    description: "An elegant black evening gown ideal for formal events and special occasions.",
    available: true
  },
  {
    id: 178,
    name: "Corset Leather With Skirt",
    price: 89.99,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp",
    description: "A bold outfit featuring a stylish leather corset and matching skirt.",
    available: true
  },
  {
    id: 179,
    name: "Corset With Black Skirt",
    price: 79.99,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp",
    description: "A coordinated outfit pairing a fashionable corset with a black skirt.",
    available: true
  },
  {
    id: 180,
    name: "Dress Pea",
    price: 49.99,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp",
    description: "A playful dress with a distinctive pattern for casual everyday wear.",
    available: true
  },
  {
    id: 181,
    name: "Marni Red & Black Suit",
    price: 179.99,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp",
    description: "A sophisticated red and black suit with a bold, modern design.",
    available: true
  },
  {
    id: 185,
    name: "Black & Brown Slipper",
    price: 19.99,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp",
    description: "Comfortable black and brown slippers suitable for relaxed everyday wear.",
    available: true
  },
  {
    id: 186,
    name: "Calvin Klein Heel Shoes",
    price: 79.99,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp",
    description: "Elegant heel shoes designed to complement formal outfits.",
    available: true
  },
  {
    id: 187,
    name: "Golden Shoes Woman",
    price: 49.99,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp",
    description: "Stylish golden shoes that add a glamorous touch to special occasions.",
    available: true
  },
  {
    id: 188,
    name: "Pampi Shoes",
    price: 29.99,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp",
    description: "Versatile shoes combining everyday comfort with a trendy appearance.",
    available: true
  },
  {
    id: 189,
    name: "Red Shoes",
    price: 34.99,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp",
    description: "Bold red shoes suitable for parties, casual outings, and stylish outfits.",
    available: false
  },
  {
    id: 201,
    name: "Classic White Sneakers",
    price: 59.99,
    category: "mens-shoes",
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    description: "Classic white sneakers designed to complement casual everyday outfits.",
    available: true
  },
  {
    id: 202,
    name: "Casual Summer Shirt",
    price: 22.99,
    category: "mens-shirts",
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    description: "A breathable casual shirt suitable for summer activities.",
    available: true
  },
  {
    id: 203,
    name: "Elegant Evening Dress",
    price: 99.99,
    category: "womens-dresses",
    image: "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
    description: "An elegant evening dress for celebrations and formal occasions.",
    available: true
  },
  {
    id: 204,
    name: "Everyday Women's Shoes",
    price: 39.99,
    category: "womens-shoes",
    image: "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp",
    description: "Comfortable everyday shoes with a versatile design.",
    available: true
  },
  {
    id: 205,
    name: "Modern Plaid Outfit",
    price: 44.99,
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
return product.find((d)=>d.id===Number(id));
}
