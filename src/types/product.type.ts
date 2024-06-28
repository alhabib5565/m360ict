export type TProduct = {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: TDimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: TReview[]
    returnPolicy: string
    minimumOrderQuantity: number
    images: string[]
    thumbnail: string
}

export type TDimensions = {
    width: number
    height: number
    depth: number
}

export type TReview = {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export type TCategory = {
    slug: string
    name: string
    url: string
}
