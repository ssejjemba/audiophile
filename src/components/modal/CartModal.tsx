import { SetStateAction, Dispatch, useRef } from "react";
import { styled } from "@stitches/react";
import { Cart } from "../card/Cart";
import { useShoppingCart } from "../../context/ShoppingCartContext";

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

export const CartModal = (props: CartModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { cartItems } = useShoppingCart();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeModal = (event: any) => {
    if (modalRef.current === event.target) {
      props.setShowModal(false);
    }
  };

  return props.showModal ? (
    <CartModalContainer ref={modalRef} onClick={closeModal}>
      {cartItems.map((item) => (
        <Cart key={item.id} {...item} />
      ))}
    </CartModalContainer>
  ) : null;
};
