import { styled } from "@stitches/react";

export type CardProps = {
  title: string;
};

const CategoryCard = styled("div", {
  width: "350px",
  height: "284px",
});

const CardImage = styled("div", {
  width: "100%",
  height: "50%",
  position: "absolute",
  top: "0",
  left: "0",
});

const CardImg = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const CardDetails = styled("div", {
  width: "100%",
  height: "85%",
  background: "$gray400",
  borderRadius: "8px",
});

const CardTitle = styled("h3", {
  font: "$manrope",
  fontSize: "18px",
  fontWeight: "700px",
  lineHeight: "25px",
});

const CardButton = styled("button", {
  width: "60px",
  height: "18px",
});

export const Card = (props: CardProps) => {
  return (
    <CategoryCard>
      <CardImage>
        <CardImg
          src="/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
          alt="headphones"
        />
      </CardImage>
      <CardDetails>
        <CardTitle>{props.title}</CardTitle>
      </CardDetails>
      <CardButton>
        <span>shop</span>
      </CardButton>
    </CategoryCard>
  );
};
