import { SetStateAction, Dispatch, useRef } from "react";
import { styled } from "@stitches/react";
import { Cart } from "../card/Cart";
import Data from "../../data/data.json";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartModalProps = {
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
  height: "488px",
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
            <HeadingNum>(3)</HeadingNum>
          </ModalHeading>
          <RemoveAllBtn>Remove All</RemoveAllBtn>
        </ContentHeadingBox>
        <CartItemsContainer>
          {Object.values(Data.cartItems).map((cartItem) => (
            <Cart
              itemImageSrc={cartItem.itemImageSrc}
              itemImageAlt={cartItem.itemImageAlt}
              itemName={cartItem.itemName}
              itemPrice={formatCurrency(cartItem.itemPrice)}
              itemsNumber={cartItem.itemsNumber}
            />
          ))}
        </CartItemsContainer>
        <TotalCostContainer>
          <TotalCostText>Total</TotalCostText>
          <TotalCostFigure>$ 5,396</TotalCostFigure>
        </TotalCostContainer>
        <CartModalBtn onClick={() => props.setShowModal((prev) => !prev)}>
          Checkout
        </CartModalBtn>
      </CartModalContent>
    </CartModalContainer>
  ) : null;
};
