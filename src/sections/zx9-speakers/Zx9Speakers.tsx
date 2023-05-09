import { styled } from "@stitches/react";

const Zx9SpeakerSection = styled("section", {
  height: "100vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const Zx9SpeakerContainer = styled("div", {
  height: "560px",
  width: "100%",
  display: "flex",
  borderRadius: "8px",
  background: "$primary",
  backgroundImage: " url(/home/desktop/pattern-circles.svg)",
});

const SpeakerImageContainer = styled("div", {
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});

const SpeakerImage = styled("img", {
  display: "inline-block",
  width: "50%",
  height: "auto",
});

const SpeakerDetailsContainer = styled("div", {
  width: "50%",
  height: "100%",
  padding: "0 95px 64px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  gap: "24px",
});

const ProductName = styled("h1", {
  color: "$white",
});

const ProductDetails = styled("p", {
  color: "$white",
  mixBlendMode: "normal",
  opacity: 0.75,
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "25px",
});

const CTAButton = styled("button", {
  border: "none",
  outline: "none",
  padding: "15px 30px",
  background: "$black",
  color: "$white",
  cursor: "pointer",
  marginTop: "16px",

  "&:hover": {
    opacity: "0.8",
  },
});

export const Zx9Speakers = () => {
  return (
    <Zx9SpeakerSection>
      <Zx9SpeakerContainer>
        <SpeakerImageContainer>
          <SpeakerImage
            src="/home/desktop/image-speaker-zx9.png"
            alt="Zx9-speaker-image"
          />
        </SpeakerImageContainer>
        <SpeakerDetailsContainer>
          <ProductName>ZX9 SPEAKER</ProductName>
          <ProductDetails>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </ProductDetails>
          <CTAButton>See Product</CTAButton>
        </SpeakerDetailsContainer>
      </Zx9SpeakerContainer>
    </Zx9SpeakerSection>
  );
};
