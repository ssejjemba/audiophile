import { styled } from "@stitches/react";
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
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <CartButtonElement onClick={() => increaseCartQuantity(props.id)}>
      {props.text}
    </CartButtonElement>
  );
};
