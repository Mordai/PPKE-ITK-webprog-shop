import axios from "axios";
import {useEffect, useState} from "react";
import ProductCard from "./ProductCard.tsx";
import {ProductData} from "./Types.ts";

type HomeProps = {
    addToBasket: (product: ProductData) => void;
}

export default function Home(props: HomeProps) {
    const apiURL = "http://beta.dev.itk.ppke.hu/webprog/example/api/"
    const [products, setProducts] = useState<ProductData[]>([])

    useEffect(() => {
        axios.get<ProductData[]>(apiURL + "listProducts")
            .then((data) => {
                setProducts(data.data);
            })
    }, [])

    return <>
        {products.map((product) => (<ProductCard key={product.id} product={product} addToBasket={props.addToBasket}/>))}
    </>
}