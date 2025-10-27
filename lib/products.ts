export interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  inStock: boolean
  collection: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Coastal Wave Bowl",
    price: 68,
    category: "Bowls",
    image: "ceramic bowl with wave pattern",
    inStock: true,
    collection: "coastal-waves",
  },
  {
    id: 2,
    name: "Minimalist Vase",
    price: 52,
    category: "Vases",
    image: "white minimalist ceramic vase",
    inStock: true,
    collection: "minimalist-modern",
  },
  {
    id: 3,
    name: "Artisan Mug Set",
    price: 45,
    category: "Mugs",
    image: "set of handmade ceramic mugs",
    inStock: true,
    collection: "rustic-charm",
  },
  {
    id: 4,
    name: "Ocean Platter",
    price: 85,
    category: "Plates",
    image: "large ceramic serving platter",
    inStock: true,
    collection: "ocean-blues",
  },
  {
    id: 5,
    name: "Textured Dinner Plate",
    price: 38,
    category: "Plates",
    image: "textured ceramic dinner plate",
    inStock: true,
    collection: "rustic-charm",
  },
  {
    id: 6,
    name: "Rustic Coffee Mug",
    price: 28,
    category: "Mugs",
    image: "rustic handmade coffee mug",
    inStock: false,
    collection: "rustic-charm",
  },
  {
    id: 7,
    name: "Tall Cylinder Vase",
    price: 62,
    category: "Vases",
    image: "tall cylinder ceramic vase",
    inStock: true,
    collection: "minimalist-modern",
  },
  {
    id: 8,
    name: "Serving Bowl Set",
    price: 95,
    category: "Bowls",
    image: "set of three serving bowls",
    inStock: true,
    collection: "coastal-waves",
  },
  {
    id: 9,
    name: "Speckled Mug",
    price: 32,
    category: "Mugs",
    image: "speckled ceramic mug",
    inStock: true,
    collection: "minimalist-modern",
  },
  {
    id: 10,
    name: "Wide Rim Bowl",
    price: 48,
    category: "Bowls",
    image: "wide rim ceramic bowl",
    inStock: true,
    collection: "coastal-waves",
  },
  {
    id: 11,
    name: "Bud Vase Trio",
    price: 42,
    category: "Vases",
    image: "three small bud vases",
    inStock: true,
    collection: "ocean-blues",
  },
  {
    id: 12,
    name: "Salad Plate Set",
    price: 72,
    category: "Plates",
    image: "set of four salad plates",
    inStock: true,
    collection: "ocean-blues",
  },
]

export const collections = [
  {
    id: "coastal-waves",
    name: "Coastal Waves",
    description: "Inspired by the rhythmic motion of ocean waves",
    image: "ceramic bowls with wave patterns",
    longDescription:
      "Our Coastal Waves collection captures the essence of the ocean's gentle rhythm. Each piece features flowing lines and organic shapes that evoke the peaceful movement of waves along the shore.",
  },
  {
    id: "minimalist-modern",
    name: "Minimalist Modern",
    description: "Clean lines and simple elegance for contemporary spaces",
    image: "minimalist white ceramic vases",
    longDescription:
      "Embrace simplicity with our Minimalist Modern collection. These pieces feature clean lines, neutral tones, and understated elegance that complement any contemporary interior.",
  },
  {
    id: "rustic-charm",
    name: "Rustic Charm",
    description: "Earthy textures and warm tones for a cozy feel",
    image: "rustic ceramic mugs and plates",
    longDescription:
      "The Rustic Charm collection brings warmth and character to your home. With earthy textures, natural glazes, and handcrafted imperfections, these pieces celebrate the beauty of artisanal pottery.",
  },
  {
    id: "ocean-blues",
    name: "Ocean Blues",
    description: "Deep blue glazes reminiscent of the sea",
    image: "blue ceramic pottery collection",
    longDescription:
      "Dive into the depths with our Ocean Blues collection. Rich blue glazes in varying shades create pieces that capture the mystery and beauty of the deep sea.",
  },
]
