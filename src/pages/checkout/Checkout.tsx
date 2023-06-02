import { styled } from "@stitches/react";
import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { FormField } from "../../components/form-feild/FormField";
import { InputText } from "../../components/input/text/InputText";
import { validateEmail } from "../../utilities/validateEmail";
import { InputRadio } from "../../components/input/radio/InputRadio";
import Data from "../../data/data.json";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Cart } from "../../components/card/Cart";
import { formatCurrency } from "../../utilities/formatCurrency";

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
  padding: "0 100px 50px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "30px",
});

const CheckoutForm = styled("form", {
  width: "730px",
  height: "fit-content",
  background: "$white",
  borderRadius: "8px",
  padding: "48px",
});

const CartSummary = styled("div", {
  width: "350px",
  height: "fit-content",
  background: "$white",
  borderRadius: "8px",
  padding: "33px",
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
  alignItems: "flex-start",
  justifyContent: "space-between",
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

const PaymentOptions = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const CheckoutHeading = styled("h2", {});

const PaymentInfo = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "16px",
  marginTop: "30px",
});

const PaymentInfoImage = styled("div", {
  display: "inline-block",
});

const PaymentInfoImg = styled("img", {
  width: "48px",
  height: "48px",
  objectFit: "cover",
});

const PaymentInfoTextBox = styled("div", {
  display: "",
});

const PaymentInfoText = styled("p", {
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "25px",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
});

const CartSummaryHeading = styled("h5", {
  color: "$black",
  marginBottom: "31px",
});

const CartSummaryStats = styled("div", {
  marginTop: "31px",
});

const TotalCostContainer = styled("p", {
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
});

const SummaryStatsText = styled("span", {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
  textTransform: "uppercase",
});

const SummaryStatsFigure = styled("span", {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "25px",
  textAlign: "center",
  textTransform: "uppercase",
  color: "$black",
});

const ShippingCostContainer = styled("p", {
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
});

const VatCostContainer = styled("p", {
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px",
});

const GrandTotalContainer = styled("p", {
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "32px",
});

const ButtonWrapper = styled("div", {
  display: "block",
  width: "100%",
});

const CartModalBtn = styled("a", {
  display: "block",
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

  "&:hover": {
    background: "$light",
  },
});

export const Checkout = () => {
  const { cartItems } = useShoppingCart();
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
                <PaymentOptions>
                  <InputRadio id="e_money" label="e-Money" />
                  <InputRadio id="cash_on_delivery" label="Cash on Delivery" />
                </PaymentOptions>
              </PaymentDetails>
              <PaymentInfo>
                <PaymentInfoImage>
                  <PaymentInfoImg
                    src={Data.checkout.checkoutIcons.cashIcon}
                    alt="Cash Icon"
                  />
                </PaymentInfoImage>
                <PaymentInfoTextBox>
                  <PaymentInfoText>
                    {Data.checkout.checkoutText}
                  </PaymentInfoText>
                </PaymentInfoTextBox>
              </PaymentInfo>
            </FormField>
          </PaymentDetailsContainer>
        </CheckoutForm>
        <CartSummary>
          <CartSummaryHeading>summary</CartSummaryHeading>
          {cartItems.map((item) => (
            <Cart key={item.id} {...item} isCartCheckout />
          ))}
          <CartSummaryStats>
            <TotalCostContainer>
              <SummaryStatsText>Total</SummaryStatsText>
              <SummaryStatsFigure>
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = Data.cartItems.find(
                      (i) => i.itemId === cartItem.id
                    );
                    return total + (item?.itemPrice || 0) * cartItem.quantity;
                  }, 0)
                )}
              </SummaryStatsFigure>
            </TotalCostContainer>
            <ShippingCostContainer>
              <SummaryStatsText>SHIPPING</SummaryStatsText>
              <SummaryStatsFigure>
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = Data.cartItems.find(
                      (i) => i.itemId === cartItem.id
                    );
                    return (
                      total + ((item?.itemWeight || 0) * cartItem.quantity) / 5
                    );
                  }, 0)
                )}
              </SummaryStatsFigure>
            </ShippingCostContainer>
            <VatCostContainer>
              <SummaryStatsText>VAT (INCLUDED)</SummaryStatsText>
              <SummaryStatsFigure>
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = Data.cartItems.find(
                      (i) => i.itemId === cartItem.id
                    );
                    return (
                      total + ((item?.itemPrice || 0) * (100 + 0.18)) / 100
                    );
                  }, 0)
                )}
              </SummaryStatsFigure>
            </VatCostContainer>
            <GrandTotalContainer>
              <SummaryStatsText>GRAND TOTAL</SummaryStatsText>
              <SummaryStatsFigure>
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = Data.cartItems.find(
                      (i) => i.itemId === cartItem.id
                    );
                    total += (item?.itemPrice || 0) * cartItem.quantity;

                    total += ((item?.itemWeight || 0) * cartItem.quantity) / 5;

                    total += ((item?.itemPrice || 0) * (100 + 0.18)) / 100;

                    return total;
                  }, 0)
                )}
              </SummaryStatsFigure>
            </GrandTotalContainer>
            <ButtonWrapper>
              <CartModalBtn href="#">Continue & Pay</CartModalBtn>
            </ButtonWrapper>
          </CartSummaryStats>
        </CartSummary>
      </CheckoutContainer>
    </CheckoutSection>
  );
};
