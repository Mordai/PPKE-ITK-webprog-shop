import { BasketItemData } from "./Types";

type CartItemProps = {
  basketItem: BasketItemData;
  changeQuantity: (id: string, quantity: number) => void;
};

export default function CartItem(props: CartItemProps) {
  console.log(props.basketItem);
  return (
    // <div>
    //   <p>{props.basketItem.product.name}</p>
    //   <p>{props.basketItem.product.price}</p>
    //   <p>{props.basketItem.quantity}</p>
    //   <button
    //     onClick={() =>
    //       props.changeQuantity(
    //         props.basketItem.product.id,
    //         props.basketItem.quantity - 1
    //       )
    //     }
    //   >
    //     -
    //   </button>
    //   <button
    //     onClick={() =>
    //       props.changeQuantity(
    //         props.basketItem.product.id,
    //         props.basketItem.quantity + 1
    //       )
    //     }
    //   >
    //     +
    //   </button>
    // </div>
    <>:)</>
  );
}
