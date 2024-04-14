import axios from "axios";
import { useParams } from "react-router-dom";
import { ProductData, apiURL } from "./Types";
import { useEffect, useState } from "react";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

export default function ProductPage(props: {
  addToBasket: (product: ProductData) => void;
}) {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductData | null>(null);

  const fetchProduct = async (id: string) => {
    await axios
      .get<ProductData>(apiURL + `productDetails/${id}`)
      .then((data) => {
        setProduct(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  useEffect(() => {
    id && fetchProduct(id);
  }, []);

  return (
    <>
      {product ? (
        <Stack display={"flex"}>
          <Card
            sx={{
              textAlign: "center",
              flexGrow: 1,
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image={`https://beta.dev.itk.ppke.hu/webprog/example/media/${product?.image}`}
              title={product?.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {product?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product?.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Raktáron: {product?.stock} db
              </Typography>
              <Typography
                variant="body1"
                marginTop={"2em"}
                color="text.secondary"
                sx={{ fontWeight: "bold" }}
              >
                Ár: {product?.price.toLocaleString("hu")} Ft
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                startIcon={<ShoppingCartIcon />}
                size="small"
                onClick={() => props.addToBasket(product)}
                disabled={product.stock === 0}
              >
                Kosárba vele!
              </Button>
            </CardActions>
          </Card>
        </Stack>
      ) : (
        <Stack
          display={"flex"}
          justifyContent={"center"}
          justifyItems={"center"}
          alignContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <ReportProblemIcon sx={{ fontSize: "5em", color: "orange" }} />

          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            A termék nem található!
          </Typography>
        </Stack>
      )}
    </>
  );
}
