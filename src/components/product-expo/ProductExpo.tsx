import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import { ProductButton } from "../../components/buttons/ProductButton";

type ProductExpoProps = {
  ProductName: string;
  ProductThumbnail?: string;
  ProductURL: string;
  ButtonTheme: string;
  ProductSrc?: string;
  ProductAlt?: string;
  ProductDetails?: string;
  height?: string;
  gutterX?: string;
  padX?: string;
  size?: string;
  backColor?: string;
  display?: "flex";
  flexDir?: "row" | "row-reverse";
  flexAlign?: string;
  background?: string;
  objCenter?: "center";
  objEnd?: "flex-end";
};

const ProductContainer = styled("div", {
  height: "320px",
  width: "100%",
  display: "flex",
  borderRadius: "8px",
  backgroundSize: "cover",
});

const ProductThumbnail = styled("div", {
  width: "50%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
});

const ProductImg = styled("img", {
  display: "inline-block",
  width: "50%",
  height: "auto",
});

const ProductDetailsContainer = styled("div", {
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
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

export const ProductExpo = (props: ProductExpoProps) => {
  return (
    <ProductContainer
      style={{
        gap: props.gutterX,
        flexDirection: props.flexDir,
        height: props.height,
        background: props.background,
        backgroundSize: props.size,
      }}
    >
      <ProductThumbnail
        style={{
          backgroundImage: `url(${props.ProductThumbnail})`,
          display: props.display,
          alignItems: props.objEnd,
          justifyContent: props.objCenter,
        }}
      >
        <ProductImg src={props.ProductSrc} alt={props.ProductAlt} />
      </ProductThumbnail>
      <ProductDetailsContainer
        style={{
          padding: props.padX,
          background: props.backColor,
          alignItems: props.flexAlign,
        }}
      >
        <ProductName>{props.ProductName}</ProductName>
        <ProductDetails>{props.ProductDetails}</ProductDetails>
        <Link to={props.ProductURL}>
          <ProductButton theme={props.ButtonTheme} text="See Product" />
        </Link>
      </ProductDetailsContainer>
    </ProductContainer>
  );
};
