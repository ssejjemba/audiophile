import { SetStateAction, Dispatch, useRef } from "react";
import { styled } from "@stitches/react";
import { Cart } from "../card/Cart";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import Data from "../../data/data.json";

type CartModalProps = {
  id?: number;
  quantity?: number;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const CartModalContainer = styled("div", {
  width: "100%",
  height: "100%",
  padding: "32px 100px 0",
  display: "flex",
  justifyContent: "flex-end",

  position: "fixed",
  top: "0",
  left: "0",
  backgroundColor: "rgba(0,0,0,0.2)",
});

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

export const CartModal = (props: CartModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { removeFromCart, cartItems, closeCart } = useShoppingCart();

  const item = Data.cartItems.find((i) => i.itemId === props.id);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeModal = (event: any) => {
    if (modalRef.current === event.target) {
      props.setShowModal(false);
    }
  };

  return props.showModal ? (
    <CartModalContainer ref={modalRef} onClick={closeModal}>
      <CartModalContent>
        <ContentHeadingBox>
          <ModalHeading>
            <HeadingText>CART</HeadingText>
            <HeadingNum>({props.quantity})</HeadingNum>
          </ModalHeading>
          <RemoveAllBtn onClick={() => removeFromCart(-1)}>
            Remove All
          </RemoveAllBtn>
        </ContentHeadingBox>
        {cartItems.map((item) => (
          <Cart key={item.id} {...item} />
        ))}
        <TotalCostContainer>
          <TotalCostText>Total</TotalCostText>
          <TotalCostFigure>
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = Data.cartItems.find(
                  (i) => i.itemId === cartItem.id
                );
                return total + (item?.itemPrice || 0) * cartItem.quantity;
              }, 0)
            )}
          </TotalCostFigure>
        </TotalCostContainer>
        <CartModalBtn onClick={closeCart}>Checkout</CartModalBtn>
      </CartModalContent>
    </CartModalContainer>
  ) : null;
};
