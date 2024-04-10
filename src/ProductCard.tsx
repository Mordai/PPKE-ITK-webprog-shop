import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {ProductData} from "./Types.ts";

type ProductCardProps = {
    product: ProductData;
    addToBasket: (product: ProductData) => void;
}

export default function ProductCard(props: ProductCardProps){
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant='h1' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.product.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.product.price.toLocaleString("hu")} Ft
                </Typography>
                <Typography variant="body2">
                    {props.product.stock} db
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Kosárba vele!</Button>
            </CardActions>
        </Card>
    )
}