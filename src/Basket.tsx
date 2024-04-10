import {BasketItemData} from "./Types.ts";

type BasketProps = {
    basketData: BasketItemData[]
}
export default function Basket(props: BasketProps) {
    return <>
        {props.basketData.map((item) => {item.product.name})}</>
}