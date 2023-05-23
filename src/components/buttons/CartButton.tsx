import { styled } from "@stitches/react";
import { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type CartButtonProps = {
  text: string;
  id: number;
};

const CartButtonElement = styled("button", {
  border: "none",
  outline: "none",
  background: "$primary",
  color: "$white",
  cursor: "pointer",
  padding: "15px 30px",

  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "18px",
  textAlign: "center",
  letterSpacing: "1px",
  textTransform: "uppercase",
});

export const CartButton = (props: CartButtonProps) => {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  const [cart, setCart] = useState(false);

  const addToCart = () => {
    const item = getItemQuantity(props.id);
    increaseCartQuantity(props.id);
    if (item >= 0) {
      setCart(true);
    }
  };

  return (
    <CartButtonElement
      style={
        cart
          ? { background: "hsl(21, 94%, 75%)", display: "none" }
          : { background: "hsl(22, 65%, 57%)", display: "block" }
      }
      onClick={() => addToCart()}
    >
      {props.text}
    </CartButtonElement>
  );
};
