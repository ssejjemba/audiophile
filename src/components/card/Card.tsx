import { styled } from "@stitches/react";

export type CardProps = {
  title: string;
  src: string;
  alt: string;
  url: string;
};

const CategoryCard = styled("div", {
  width: "350px",
  height: "284px",
  background: "$gray400",
  borderRadius: "8px",
});

const CardImage = styled("div", {
  width: "100%",
  height: "50%",
  transform: "translateY(-120px)",
});

const CardImg = styled("img", {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
});

const CardDetails = styled("div", {
  width: "100%",
  height: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "$gray400",
  paddingTop: "44px",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
});

const CardTitle = styled("h3", {
  font: "$monorope",
  fontSize: "18px",
  fontWeight: "700px",
  lineHeight: "25px",
});

const CardLink = styled("a", {
  textDecoration: "none",
  background: "transparent",
  padding: "8px 12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "14px",
  marginTop: "15px",
});

const ButtonText = styled("span", {
  display: "inline-block",
  font: "$monorope",
  fontSize: "13px",
  fontWeight: "700",
  lineHeight: "18px",
  letterSpacing: "1px",
  color: "$black",
  textTransform: "uppercase",
  mixBlendMode: "normal",
  opacity: "0.5",
});

export const Card = (props: CardProps) => {
  return (
    <CategoryCard>
      <CardImage>
        <CardImg src={props.src} alt={props.alt} />
      </CardImage>
      <CardDetails>
        <CardTitle>{props.title}</CardTitle>
        <CardLink href={props.url}>
          <ButtonText>shop</ButtonText>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3219 1L6.3219 6L1.3219 11"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        </CardLink>
      </CardDetails>
    </CategoryCard>
  );
};
