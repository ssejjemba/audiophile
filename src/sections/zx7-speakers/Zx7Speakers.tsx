import { styled } from "@stitches/react";
import { ProductButton } from "../../components/buttons/ProductButton";

const Zx7SpeakerSection = styled("section", {
  height: "50vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const Zx7SpeakerContainer = styled("div", {
  height: "320px",
  width: "100%",
  display: "flex",
  borderRadius: "8px",
  backgroundImage: "url(/local/desktop/zx7-speaker-bg.png)",
  backgroundSize: "cover",
});

const SpeakerDetailsContainer = styled("div", {
  width: "50%",
  height: "100%",
  padding: "0 95px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "24px",
});

const ProductName = styled("h1", {
  color: "$white",
});

export const Zx7Speakers = () => {
  return (
    <Zx7SpeakerSection>
      <Zx7SpeakerContainer>
        <SpeakerDetailsContainer>
          <ProductName>ZX7 SPEAKER</ProductName>
          <ProductButton text="See Product" />
        </SpeakerDetailsContainer>
      </Zx7SpeakerContainer>
    </Zx7SpeakerSection>
  );
};
