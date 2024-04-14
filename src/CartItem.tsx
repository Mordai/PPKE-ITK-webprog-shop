import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { BasketItemData } from "./Types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

type CartItemProps = {
  basketItem: BasketItemData;
  changeQuantity: (id: string, quantity: number) => void;
};

export default function CartItem(props: CartItemProps) {
  return (
    <Stack
      key={props.basketItem.product.id}
      display={"flex"}
      flexDirection={"column"}
      sx={{ pl: "20%", pr: "20%" }}
    >
      <Stack
        display={"flex"}
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"normal"}
        direction={"row"}
        gap={1.5}
      >
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          {props.basketItem.product.name}
        </Typography>
        <Typography>
          {(
            props.basketItem.product.price * props.basketItem.quantity
          ).toLocaleString("hu")}{" "}
          Ft
        </Typography>
        <IconButton
          onClick={() =>
            props.changeQuantity(
              props.basketItem.product.id,
              props.basketItem.quantity - 1
            )
          }
        >
          <RemoveIcon />
        </IconButton>
        <Typography sx={{ minWidth: "20px", textAlign: "center" }}>
          {props.basketItem.quantity}
        </Typography>
        <IconButton
          onClick={() =>
            props.changeQuantity(
              props.basketItem.product.id,
              props.basketItem.quantity + 1
            )
          }
          disabled={
            props.basketItem.quantity === props.basketItem.product.stock
          }
        >
          <AddIcon />
        </IconButton>
        <IconButton
          onClick={() => props.changeQuantity(props.basketItem.product.id, 0)}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
      <Divider />
    </Stack>
  );
}
