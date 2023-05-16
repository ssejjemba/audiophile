import { styled } from "@stitches/react";
import { FilledButton } from "../../components/buttons/FilledButton";

const RelatedProductsSection = styled("section", {
  width: "100%",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "64px",
});

const RelatedProductHeading = styled("h3", {
  color: "$black",
});

const RelatedProductsCardContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
});

const RelatedProductsCard = styled("div", {
  width: "350px",
  height: "471px",
});

const RelatedProductImage = styled("div", {
  width: "100%",
  height: "60%",
  borderRadius: "8px",
});

const RelatedProductImg = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
});

const RelatedProductDetails = styled("div", {
  width: "100%",
  height: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
});

const RelatedProductName = styled("h3", {
  color: "$black",
});

export const RelatedProducts = () => {
  return (
    <RelatedProductsSection>
      <RelatedProductHeading>you may also like</RelatedProductHeading>
      <RelatedProductsCardContainer>
        <RelatedProductsCard>
          <RelatedProductImage>
            <RelatedProductImg
              src="/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
              alt="Mark I"
            />
          </RelatedProductImage>
          <RelatedProductDetails>
            <RelatedProductName>XX99 MARK I</RelatedProductName>
            <FilledButton text="see product" />
          </RelatedProductDetails>
        </RelatedProductsCard>
        <RelatedProductsCard>
          <RelatedProductImage>
            <RelatedProductImg
              src="/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
              alt="Mark I"
            />
          </RelatedProductImage>
          <RelatedProductDetails>
            <RelatedProductName>XX99 MARK I</RelatedProductName>
            <FilledButton text="see product" />
          </RelatedProductDetails>
        </RelatedProductsCard>
        <RelatedProductsCard>
          <RelatedProductImage>
            <RelatedProductImg
              src="/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
              alt="Mark I"
            />
          </RelatedProductImage>
          <RelatedProductDetails>
            <RelatedProductName>XX99 MARK I</RelatedProductName>
            <FilledButton text="see product" />
          </RelatedProductDetails>
        </RelatedProductsCard>
      </RelatedProductsCardContainer>
    </RelatedProductsSection>
  );
};
