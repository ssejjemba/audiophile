import { styled } from "@stitches/react";
import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { FormField } from "../../components/form-feild/FormField";
import { InputText } from "../../components/input/text/InputText";
import { validateEmail } from "../../utilities/validateEmail";

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

const BillingContainer = styled("div", {
  marginTop: "41px",
});

const BillingTextDetails = styled("div", {
  marginTop: "16px",
  display: "flex",
  gap: "16px",
});

const BillingNumberDetails = styled("div", {
  marginTop: "24px",
});

const ShoppingInfoContainer = styled("div", {
  marginTop: "53px",
});

const ShoppingAddress = styled("div", {
  width: "100%",
  marginTop: "16px",
});

const ShoppingCityCode = styled("div", {
  display: "flex",
  gap: "16px",
  marginTop: "24px",
});

const ShoppingCountry = styled("div", {
  marginTop: "24px",
});

const PaymentDetailsContainer = styled("div", {
  marginTop: "61px",
});

const PaymentDetails = styled("div", {
  marginTop: "16px",
  display: "flex",
});

const PaymentDetailsHeadingBox = styled("div", {
  display: "block",
});

const PaymentDetailsHeading = styled("p", {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "-0.2",
  color: "$black",
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
          <BillingContainer>
            <FormField text="billing details">
              <BillingTextDetails>
                <InputText
                  type="text"
                  label="Name"
                  placeholder="Please enter your Name"
                  id="name"
                />
                <InputText
                  type="text"
                  label="Email"
                  placeholder="Please enter your Email"
                  id="email"
                  validationFn={validateEmail}
                />
              </BillingTextDetails>
              <BillingNumberDetails>
                <InputText
                  type="tel"
                  label="Phone Number"
                  placeholder="+1 (202) 555-0136"
                  id="number"
                />
              </BillingNumberDetails>
            </FormField>
          </BillingContainer>
          <ShoppingInfoContainer>
            <FormField text="shipping info">
              <ShoppingAddress>
                <InputText
                  style={{ width: "100%" }}
                  type="url"
                  label="Address"
                  placeholder="1137 Williams Avenue"
                  id="address"
                />
              </ShoppingAddress>
              <ShoppingCityCode>
                <InputText
                  type="text"
                  label="ZIP Code"
                  placeholder="10001"
                  id="zip_code"
                />
                <InputText
                  type="text"
                  label="City"
                  placeholder="New York"
                  id="city"
                />
              </ShoppingCityCode>
              <ShoppingCountry>
                <InputText
                  type="text"
                  label="Country"
                  placeholder="United States"
                  id="country"
                />
              </ShoppingCountry>
            </FormField>
          </ShoppingInfoContainer>
          <PaymentDetailsContainer>
            <FormField text="payment details">
              <PaymentDetails>
                <PaymentDetailsHeadingBox>
                  <PaymentDetailsHeading>Payment Method</PaymentDetailsHeading>
                </PaymentDetailsHeadingBox>
              </PaymentDetails>
            </FormField>
          </PaymentDetailsContainer>
        </CheckoutForm>
        <CartSummary></CartSummary>
      </CheckoutContainer>
    </CheckoutSection>
  );
};
