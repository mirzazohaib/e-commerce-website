export type Product = {
  _id: string
  name: string
  slug: string
  image: string
  category: Category
  brand: string
  price: number
  size: Sizes
  variant: Variant
  countInStock: number
  description: string
  rating: number
  numReviews: number
}

type Category =
  | 'Shirts'
  | 'Pants'
  | 'Shorts'
  | 'Trousers'
  | 'T-Shirts'
  | 'Jackets'
  | 'Jewelery'
  | 'Backpack'
  | 'Jeans'

type Sizes = 'S' | 'M' | 'L' | 'XL' | 'One'

type Variant = 'White' | 'Black' | 'Red' | 'Green' | 'Blue' | 'Brown' | 'Silver'
