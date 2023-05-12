import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import { ProductButton } from "../../components/buttons/ProductButton";

type ProductExpoProps = {
  ProductName: string;
  ProductThumbnail: string;
  ProductDetails?: string;
};

const ProductContainer = styled("div", {
  height: "320px",
  width: "100%",
  display: "flex",
  gap: "30px",
  borderRadius: "8px",
});

const ProductThumbnail = styled("div", {
  width: "50%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  backgroundImage: `${(props: ProductExpoProps) => props.ProductThumbnail}`,
});

const SpeakerDetailsContainer = styled("div", {
  width: "50%",
  height: "100%",
  background: "$gray400",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  borderRadius: "8px",
});

const ProductName = styled("h1", {
  color: "$black",
});

const ProductDetails = styled("p", {
  color: "$white",
  mixBlendMode: "normal",
  opacity: 0.75,
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "25px",
});

export const Yx1Earphones = (props: ProductExpoProps) => {
  return (
    <ProductContainer>
      <ProductThumbnail></ProductThumbnail>
      <SpeakerDetailsContainer>
        <ProductName>{props.ProductName}</ProductName>
        <ProductDetails>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </ProductDetails>
        <Link to={`category-headphones`}>
          <ProductButton text="See Product" />
        </Link>
      </SpeakerDetailsContainer>
    </ProductContainer>
  );
};
