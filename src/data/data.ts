import { Product } from '../types/Product'

export const sampleProducts: Product[] = [
  {
    _id: 1,
    name: 'Nike Shirt',
    slug: 'nike-shirt',
    image: '../images/image-01.jpg',
    category: 'Shirts',
    brand: 'Nike',
    price: 100,
    size: 'M',
    variant: 'Black',
    countInStock: 10,
    description: 'high quality shirt',
    rating: 4.5,
    numReviews: 10
  },
  {
    _id: 2,
    name: 'Zara Shirt',
    slug: 'zara-shirt',
    image: '../images/image-02.jpg',
    category: 'Shirts',
    brand: 'Zara',
    price: 150,
    size: 'S',
    variant: 'White',
    countInStock: 23,
    description: 'high quality shirt',
    rating: 3.5,
    numReviews: 10
  },
  {
    _id: 3,
    name: 'Mango Shirt',
    slug: 'mango-shirt',
    image: '../images/image-03.jpg',
    category: 'Shirts',
    brand: 'Zara',
    price: 170,
    size: 'M',
    variant: 'Black',
    countInStock: 23,
    description: 'high quality shirt',
    rating: 3.5,
    numReviews: 10
  },
  {
    _id: 4,
    name: 'Zara Pants',
    slug: 'zara-pants',
    image: '../images/image-04.jpg',
    category: 'Pants',
    brand: 'Zara',
    price: 220,
    size: 'M',
    variant: 'Black',
    countInStock: 13,
    description: 'high quality pants',
    rating: 4.0,
    numReviews: 10
  }
]
