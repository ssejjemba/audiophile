import { styled } from "@stitches/react";
import { ProductExpo } from "../../components/product-expo/ProductExpo";
import productData from "../../data/product.json";

const Zx9SpeakerSection = styled("section", {
  height: "100vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const Product9Speakers = () => {
  return (
    <Zx9SpeakerSection>
      <ProductExpo
        ProductName={productData[2].productName}
        ProductURL={productData[2].productURL}
        ProductThumbnail={productData[2].productThumbnail}
        ProductSrc={productData[2].productSrc}
        ProductAlt={productData[2].productAlt}
        ProductDetails={productData[2].productDetails}
        ButtonTheme="dark"
        height="500px"
        padX="50px 95px 0"
        size="auto"
        display="flex"
        objCenter="center"
        objEnd="flex-end"
        background={`hsl(22, 65%, 57%) url(${productData[2].background})`}
      />
    </Zx9SpeakerSection>
  );
};
