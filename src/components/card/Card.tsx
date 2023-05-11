import { styled } from "@stitches/react";

export type CardProps = {
  title: string;
  src: string;
  alt: string;
};

const CategoryCard = styled("div", {
  width: "350px",
  height: "284px",
  position: "relative",
});

const CardImage = styled("div", {
  width: "100%",
  height: "100%",
  background: "transparent",
  position: "absolute",
  top: "-165px",
  left: "0",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
});

const CardImg = styled("img", {
  width: "100%",
  height: "100%",
  background: "transparent",
  objectFit: "cover",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
});

const CardDetails = styled("div", {
  width: "100%",
  height: "85%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "$gray400",
  borderRadius: "8px",
  padding: "116px 108.5px 30px",
});

const CardTitle = styled("h3", {
  font: "$monorope",
  fontSize: "18px",
  fontWeight: "700px",
  lineHeight: "25px",
});

const CardButton = styled("button", {
  margin: "0",
  border: "0",
  outline: "none",
  cursor: "pointer",
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
        <CardButton>
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
        </CardButton>
      </CardDetails>
    </CategoryCard>
  );
};
