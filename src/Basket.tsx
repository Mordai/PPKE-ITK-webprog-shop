import { BasketItemData } from "./Types.ts";
import { Stack, Typography } from "@mui/material";
import CartItem from "./CartItem.tsx";

type BasketProps = {
  basketData: BasketItemData[];
  changeQuantity: (id: string, quantity: number) => void;
};

export default function Basket(props: BasketProps) {
  const totalCost = props.basketData.reduce(
    (a, b) => a + b.product.price * b.quantity,
    0
  );
  return (
    <>
      {props.basketData.length > 0 ? (
        <>
          <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
            A kosár tartalma
          </Typography>
          {props.basketData.map((item) => {
            return (
              <>
                <CartItem
                  basketItem={item}
                  changeQuantity={props.changeQuantity}
                />
              </>
            );
          })}
          <Stack
            display={"flex"}
            flexDirection={"row"}
            sx={{ mt: 5, pl: "20%", pr: "20%" }}
          >
            <Typography
              variant="h6"
              flexGrow={1}
              sx={{ textAlign: "left", mb: 2 }}
            >
              Összesen:
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {totalCost.toLocaleString("hu")} Ft
            </Typography>
          </Stack>
        </>
      ) : (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          A kosár üres
        </Typography>
      )}
    </>
  );
}
