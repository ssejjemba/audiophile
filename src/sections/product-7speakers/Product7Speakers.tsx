import { styled } from "@stitches/react";
import { ProductExpo } from "../../components/product-expo/ProductExpo";
import productData from "../../data/product.json";
const Speaker7Section = styled("section", {
  height: "50vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const Product7Speakers = () => {
  return (
    <Speaker7Section>
      <ProductExpo
        ProductName={productData.speakers7.productName}
        background={`url(${productData.speakers7.productThumbnail})`}
        ProductURL={productData.speakers7.productURL}
        ButtonTheme="light"
        padX="0 95px 0"
        flexAlign="flex-start"
        flexDir="row-reverse"
      />
    </Speaker7Section>
  );
};
