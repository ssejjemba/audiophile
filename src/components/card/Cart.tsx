import { styled } from "@stitches/react";
import { StateButton } from "../buttons/StateButton";

type CartProps = {
  itemName: string;
  itemPrice: string;
  itemImageSrc: string;
  itemImageAlt: string;
  itemsNumber: string;
};

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
  return (
    <CartItemCard>
      <CartItemThumbnail>
        <CartItemImg src={props.itemImageSrc} alt={props.itemImageAlt} />
        <CartItemCaption>
          <CartItemName>{props.itemName}</CartItemName>
          <CartItemPrice>{props.itemPrice}</CartItemPrice>
        </CartItemCaption>
      </CartItemThumbnail>
      <ButtonWrapper>
        <StateButton text={props.itemsNumber} />
      </ButtonWrapper>
    </CartItemCard>
  );
};
