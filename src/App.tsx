import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import MainLayout from "./MainLayout";
import TOS from "./TOS.tsx";
import {useState} from "react";
import Basket from "./Basket.tsx";
import {BasketItemData, ProductData} from "./Types.ts";

function App() {
    const [basketContent, setBasketContent] = useState<BasketItemData[]>([])

    const addToBasket = (product: ProductData) => {
        //setBasketContent([...basketContent, product])
    }
    return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"}  element={<MainLayout/>}>
                  <Route index element={<Home addToBasket={addToBasket}/>}/>
                  <Route path={'basket'} element={<Basket basketData={basketContent}/>}/>
                  <Route path={'tos'} element={<TOS/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
