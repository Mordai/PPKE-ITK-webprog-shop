import { Button, Stack, Typography } from "@mui/material";
import { BasketItemData } from "./Types";

type CartItemProps = {
  basketItem: BasketItemData;
  changeQuantity: (id: string, quantity: number) => void;
};

export default function CartItem(props: CartItemProps) {
  return (
    <Stack
      key={props.basketItem.product.id}
      display={"flex"}
      direction={"column"}
    >
      <Typography>{props.basketItem.product.name}</Typography>
      <Typography>{props.basketItem.product.price}</Typography>
      <Typography>{props.basketItem.quantity}</Typography>
      <Button>-</Button>
      <Button>+</Button>
    </Stack>
  );
}
