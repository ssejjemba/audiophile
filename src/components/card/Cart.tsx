import { styled } from "@stitches/react";
import { StateButton } from "../buttons/StateButton";
// import { useShoppingCart } from "../../context/ShoppingCartContext";
import Data from "../../data/data.json";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartProps = {
  id: number;
  quantity: number;
};

const CartItemsContainer = styled("div", {
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginBottom: "32px",
});

const CartItemCard = styled("div", {
  width: "100%",
  height: "64px",
  display: "flex",
  alignItems: "center",
  gap: "40px",
});

const CartItemThumbnail = styled("figure", {
  width: "60%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

const CartItemImg = styled("img", {
  width: "50%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
});

const CartItemCaption = styled("figcaption", {
  width: "60%",
});

const CartItemName = styled("span", {
  display: "block",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$black",
});

const CartItemPrice = styled("span", {
  display: "block",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "25px",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
});

const ButtonWrapper = styled("div", {
  width: "40%",
  height: "100%",
  display: "flex",
  alignItems: "center",
});

export const Cart = (props: CartProps) => {
  const item = Data.cartItems.find((i) => i.itemId === props.id);

  if (item == null) return null;

  return (
    <CartItemsContainer>
      <CartItemCard>
        <CartItemThumbnail>
          <CartItemImg src={item.itemImageSrc} alt={item.itemImageAlt} />
          <CartItemCaption>
            <CartItemName>{item.itemName}</CartItemName>
            <CartItemPrice>{formatCurrency(item.itemPrice)}</CartItemPrice>
          </CartItemCaption>
        </CartItemThumbnail>
        <ButtonWrapper>
          <StateButton id={props.id} />
        </ButtonWrapper>
      </CartItemCard>
    </CartItemsContainer>
  );
};
