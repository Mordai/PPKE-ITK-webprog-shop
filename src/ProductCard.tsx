import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ProductData } from "./Types.ts";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  product: ProductData;
  addToBasket: (product: ProductData) => void;
};

export default function ProductCard(props: ProductCardProps) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography
          variant="h5"
          color="text.secondary"
          onClick={() => {
            navigate(`/product/${props.product.id}`, { replace: true });
          }}
          sx={{ cursor: "pointer" }}
          gutterBottom
        >
          {props.product.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.product.price.toLocaleString("hu")} Ft
        </Typography>
        <Typography variant="body2">{props.product.stock} db</Typography>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<ShoppingCartIcon />}
          size="small"
          onClick={() => props.addToBasket(props.product)}
          disabled={props.product.stock === 0}
        >
          Kosárba vele!
        </Button>
      </CardActions>
    </Card>
  );
}
