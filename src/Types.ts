export type ProductData = {
  id: string;
  name: string;
  price: number;
  promo: boolean;
  stock: number;
};

export type BasketItemData = {
  product: ProductData;
  quantity: number;
};
