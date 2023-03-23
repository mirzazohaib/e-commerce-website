export type Product = {
  _id: number
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

type Category = 'Shirts' | 'Pants' | 'Shorts' | 'Trousers'

type Sizes = 'S' | 'M' | 'L' | 'XL'

type Variant = 'White' | 'Black' | 'Red' | 'Green' | 'Blue'
