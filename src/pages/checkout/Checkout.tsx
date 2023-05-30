import { styled } from "@stitches/react";
import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { ReturnButton } from "../../components/buttons/ReturnButton";

const CheckoutSection = styled("section", {
  width: "100%",
  height: "auto",
  background: "$gray400",
});

const NavWrapper = styled("header", {
  background: "$secondary",
  width: "100%",
  height: "fit-content",
  padding: "0 100px",
});

const CheckoutContainer = styled("div", {
  width: "100%",
  height: "fit-content",
  padding: "0 100px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "30px",
});

const CheckoutForm = styled("form", {
  width: "730px",
  height: "1126px",
  background: "$white",
  borderRadius: "8px",
  padding: "48px",
});

const CartSummary = styled("div", {
  width: "350px",
  height: "612px",
  background: "$white",
  borderRadius: "8px",
});

const CheckoutHeading = styled("h2", {});

export const Checkout = () => {
  return (
    <CheckoutSection>
      <NavWrapper>
        <NavigationBar hasBorder={false} hasNotification={false} />;
      </NavWrapper>
      <ReturnButton text="Go Back" />
      <CheckoutContainer>
        <CheckoutForm action="" method="get">
          <CheckoutHeading>Checkout</CheckoutHeading>
        </CheckoutForm>
        <CartSummary></CartSummary>
      </CheckoutContainer>
    </CheckoutSection>
  );
};
