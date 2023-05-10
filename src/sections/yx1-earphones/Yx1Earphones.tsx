import { styled } from "@stitches/react";
import { ProductButton } from "../../components/buttons/ProductButton";

const Yx1EarphonesSection = styled("section", {
  height: "60vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const Yx1EarphonesContainer = styled("div", {
  height: "320px",
  width: "100%",
  display: "flex",
  gap: "30px",
  borderRadius: "8px",
});

const SpeakerImageContainer = styled("div", {
  width: "50%",
  height: "100%",
  backgroundImage: "url(home/desktop/image-earphones-yx1.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
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

export const Yx1Earphones = () => {
  return (
    <Yx1EarphonesSection>
      <Yx1EarphonesContainer>
        <SpeakerImageContainer></SpeakerImageContainer>
        <SpeakerDetailsContainer>
          <ProductName>YX1 SPEAKER</ProductName>
          <ProductButton text="See Product" />
        </SpeakerDetailsContainer>
      </Yx1EarphonesContainer>
    </Yx1EarphonesSection>
  );
};
