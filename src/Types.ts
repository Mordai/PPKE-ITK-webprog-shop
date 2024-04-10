export type ProductData = {
    id: number
    name: string
    price: number
    promo: boolean
    stock: number
}

export type BasketItemData = {
    id: number,
    product: ProductData
    quantity: number
}