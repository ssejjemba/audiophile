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
        ProductName={productData[1].productName}
        backImg={productData[1].productThumbnail}
        ProductURL={productData[1].productURL}
        padX="0 95px 0"
        flexAlign="flex-start"
      />
    </Speaker7Section>
  );
};
