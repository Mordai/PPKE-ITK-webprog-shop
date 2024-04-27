import { BasketItemData, OrderStatus, apiURL } from "./Types.ts";
import { Button, Stack, TextField, Typography } from "@mui/material";
import CartItem from "./CartItem.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderStatusPanel from "./OrderStatusPanel.tsx";

type BasketProps = {
  basketData: BasketItemData[];
  changeQuantity: (id: string, quantity: number) => void;
  clearBasket: () => void;
};

export default function Basket(props: BasketProps) {
  const totalCost = props.basketData.reduce(
    (a, b) => a + b.product.price * b.quantity,
    0
  );
  const [email, setEmail] = useState<string>("");
  const [orderStatus, setOrderStatus] = useState<OrderStatus>({
    status: "Ready",
  });
  const isEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const placeOrder = () => {
    axios
      .post("https://beta.dev.itk.ppke.hu/webprog/lenba8/api.php", {
        basket: props.basketData.map((item) => ({
          id: item.product.id,
          q: item.quantity,
        })),
        email: email,
      })
      .then((data) => {
        if (data.status === 201) {
          setOrderStatus({
            status: "Ordered",
            orderId: data.data.id,
            error: "",
          });
          props.clearBasket();
        } else {
          setOrderStatus({
            status: "Error",
            orderId: "",
            error: data.data.error,
          });
        }
      })
      .catch((error) => {
        setOrderStatus({
          status: "Error",
          orderId: "",
          error: error.message,
        });
      });
  };
  useEffect(() => {
    setOrderStatus({ status: "Ready" });
  }, []);

  return (
    <>
      {orderStatus.status === "Ready" ? (
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
                      key={item.product.id}
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
              <Stack
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                sx={{ mt: 5, pl: "20%", pr: "20%" }}
              >
                <TextField
                  sx={{ flexGrow: 1 }}
                  value={email}
                  placeholder="E-mail cím"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!isEmail(email)}
                  onClick={placeOrder}
                >
                  Megrendelés
                </Button>
              </Stack>
            </>
          ) : (
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              A kosár üres
            </Typography>
          )}
        </>
      ) : (
        <OrderStatusPanel orderStatus={orderStatus} />
      )}
    </>
  );
}
