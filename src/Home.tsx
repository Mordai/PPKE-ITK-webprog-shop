import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.tsx";
import { ProductData, apiURL } from "./Types.ts";

type HomeProps = {
  addToBasket: (product: ProductData) => void;
};

export default function Home(props: HomeProps) {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    axios.get<ProductData[]>(apiURL + "listProducts").then((data) => {
      setProducts(data.data);
    });
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToBasket={props.addToBasket}
        />
      ))}
    </>
  );
}
