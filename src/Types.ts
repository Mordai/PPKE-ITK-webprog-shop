export type ProductData = {
  id: string;
  name: string;
  price: number;
  promo: boolean;
  stock: number;
  image?: string;
  description?: string;
};

export type BasketItemData = {
  product: ProductData;
  quantity: number;
};

export type OrderStatus = {
  status: "Ready" | "Ordered" | "Error";
  orderId?: string;
  error?: string;
};

export const apiURL = "http://beta.dev.itk.ppke.hu/webprog/example/api/";
