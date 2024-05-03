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
  id?: string;
  message?: string;
  errors? : {
    name: boolean | string,
    email: boolean | string,
    terms: boolean | string,
    basket: boolean | string,
  }
};

export const apiURL = "https://beta.dev.itk.ppke.hu/webprog/example/api/";
