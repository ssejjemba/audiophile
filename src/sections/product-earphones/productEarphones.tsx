import { styled } from "@stitches/react";
import { ProductExpo } from "../../components/product-expo/ProductExpo";
import productData from "../../data/product.json";

const EarphonesSection = styled("section", {
  height: "60vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const ProductEarphones = () => {
  return (
    <EarphonesSection>
      <ProductExpo
        ProductName={productData[0].productName}
        ProductThumbnail={productData[0].productThumbnail}
        ProductURL={productData[0].productURL}
        gutterX="30px"
        backColor="hsl(0, 0%, 95%)"
        flexAlign="center"
      />
    </EarphonesSection>
  );
};
