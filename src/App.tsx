import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MainLayout from "./MainLayout";
import TOS from "./TOS.tsx";
import { useState } from "react";
import Basket from "./Basket.tsx";
import { BasketItemData, ProductData } from "./Types.ts";
import ProductPage from "./ProductPage.tsx";

export default function App() {
  const [basketContent, setBasketContent] = useState<BasketItemData[]>([]);

  const addToBasket = (_product: ProductData) => {
    const product = basketContent.find(
      (item) => item.product.id === _product.id
    );
    if (!product) {
      setBasketContent([...basketContent, { product: _product, quantity: 1 }]);
    } else {
      setBasketContent(
        basketContent.map((item) => {
          if (item.product.id === _product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    }
  };

  const changeQuantity = (id: string, quantity: number) => {
    setBasketContent(
      quantity === 0
        ? basketContent.filter((item) => item.product.id !== id)
        : basketContent.map((item) => {
            if (item.product.id === id) {
              return { ...item, quantity: quantity };
            }
            return item;
          })
    );
  };

  const totalQuantity = basketContent.reduce(
    (item, acc) => item + acc.quantity,
    0
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout cartCount={totalQuantity} />}>
          <Route index element={<Home addToBasket={addToBasket} />} />
          <Route
            path="basket"
            element={
              <Basket
                basketData={basketContent}
                changeQuantity={changeQuantity}
                clearBasket={() => setBasketContent([])}
              />
            }
          />
          <Route
            path="product/:id"
            element={<ProductPage addToBasket={addToBasket} />}
          />
          <Route path="tos" element={<TOS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
