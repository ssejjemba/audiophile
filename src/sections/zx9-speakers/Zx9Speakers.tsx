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
  borderRadius: "8px",
  background: "$primary",
  backgroundImage: " url(/home/desktop/pattern-circles.svg)",
});

export const Zx9Speakers = () => {
  return (
    <Zx9SpeakerSection>
      <Zx9SpeakerContainer></Zx9SpeakerContainer>
    </Zx9SpeakerSection>
  );
};
