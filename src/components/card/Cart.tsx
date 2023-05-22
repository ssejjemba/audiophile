import { styled } from "@stitches/react";
import { StateButton } from "../buttons/StateButton";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import Data from "../../data/data.json";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartProps = {
  id: number;
  quantity: number;
};

const CartModalContent = styled("div", {
  width: "377px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$white",
  padding: "31px",
  borderRadius: "8px",
});

const ContentHeadingBox = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "32px",
});

const ModalHeading = styled("h4", {
  display: "flex",
});

const HeadingText = styled("span", {
  color: "$black",
});

const HeadingNum = styled("span", {
  color: "$black",
});

const RemoveAllBtn = styled("button", {
  border: "none",
  outline: "none",
  background: "transparent",
  padding: "8px 12px",
  color: "$black",

  fontStyle: "normal",
  fontWeight: "500",
  textDecoration: "underline",
  fontSize: "15px",
  lineHeight: "25px",
  mixBlendMode: "normal",
  opacity: "0.5",
});

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

const TotalCostContainer = styled("p", {
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px",
});

const TotalCostText = styled("span", {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
});

const TotalCostFigure = styled("span", {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "25px",
  textAlign: "center",
  textTransform: "uppercase",
  color: "$black",
});

const CartModalBtn = styled("button", {
  width: "100%",
  border: "none",
  outline: "none",
  margin: "0",
  padding: "15px 30px",
  cursor: "pointer",
  background: "$primary",
  color: "$white",

  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "13px",
  lineHeight: "18px",
  textAlign: "center",
  letterSpacing: "1px",
  textTransform: "uppercase",
});

const ButtonWrapper = styled("div", {
  width: "40%",
  height: "100%",
  display: "flex",
  alignItems: "center",
});

export const Cart = (props: CartProps) => {
  const { removeFromCart, cartItems, closeCart } = useShoppingCart();
  const item = Data.cartItems.find((i) => i.itemId === props.id);

  if (item == null) return null;

  return (
    <CartModalContent>
      <ContentHeadingBox>
        <ModalHeading>
          <HeadingText>CART</HeadingText>
          <HeadingNum>({props.quantity})</HeadingNum>
        </ModalHeading>
        <RemoveAllBtn onClick={() => removeFromCart(item.itemId)}>
          Remove All
        </RemoveAllBtn>
      </ContentHeadingBox>
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
      <TotalCostContainer>
        <TotalCostText>Total</TotalCostText>
        <TotalCostFigure>
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = Data.cartItems.find((i) => i.itemId === cartItem.id);
              return total + (item?.itemPrice || 0) * cartItem.quantity;
            }, 0)
          )}
        </TotalCostFigure>
      </TotalCostContainer>
      <CartModalBtn onClick={closeCart}>Checkout</CartModalBtn>
    </CartModalContent>
  );
};
