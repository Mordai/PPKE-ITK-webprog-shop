import { BasketItemData } from "./Types.ts";
import CartItem from "./CartItem.tsx";
import { Typography } from "@mui/material";

type BasketProps = {
  basketData: BasketItemData[];
  changeQuantity: (id: string, quantity: number) => void;
};

export default function Basket(props: BasketProps) {
  console.log(props.basketData);
  return (
    <>
      <Typography variant="h4">Kosár</Typography>
      {props.basketData.map((item) => {
        <CartItem
          key={item.product.id}
          basketItem={item}
          changeQuantity={props.changeQuantity}
        />;
      })}
    </>
  );
}
