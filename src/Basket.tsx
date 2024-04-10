import { BasketItemData } from "./Types.ts";
import { Typography } from "@mui/material";
import CartItem from "./CartItem.tsx";

type BasketProps = {
  basketData: BasketItemData[];
  changeQuantity: (id: string, quantity: number) => void;
};

export default function Basket(props: BasketProps) {
  return (
    <>
      {props.basketData.length > 0 ? (
        props.basketData.map((item) => {
          <CartItem basketItem={item} changeQuantity={props.changeQuantity} />;
        })
      ) : (
        <Typography>A kosár üres</Typography>
      )}
    </>
  );
}
