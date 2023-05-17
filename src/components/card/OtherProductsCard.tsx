import { styled } from "@stitches/react";
import { FilledButton } from "../../components/buttons/FilledButton";
import { Link } from "react-router-dom";

type OtherProductCardProps = {
  productName: string;
  productImgURL: string;
  productImgAlt: string;
  productPageURL: string;
};

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

export const OtherProductCard = (props: OtherProductCardProps) => {
  return (
    <RelatedProductsCard>
      <RelatedProductImage>
        <RelatedProductImg
          src={props.productImgURL}
          alt={props.productImgAlt}
        />
      </RelatedProductImage>
      <RelatedProductDetails>
        <RelatedProductName>{props.productName}</RelatedProductName>
        <Link to={props.productPageURL}>
          <FilledButton text="see product" />
        </Link>
      </RelatedProductDetails>
    </RelatedProductsCard>
  );
};
