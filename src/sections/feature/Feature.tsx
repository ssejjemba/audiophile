import { styled } from "@stitches/react";

const FeatureSection = styled("section", {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
});

const FeatureElementContainer = styled("div", {
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});

const FeatureDetails = styled("div", {
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const FeatureDetailsHeading = styled("h3", {
  color: "$black",
});

const FeatureParagraph = styled("p", {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
});

const FeatureBoxWrapper = styled("div", {
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FeatureBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const FeatureBoxTitle = styled("h3", {
  color: "$black",
});

const BoxContentWrapper = styled("ul", {
  listStyleType: "none",
  margin: "0",
  padding: "0",

  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const BoxContentItem = styled("li", {
  display: "flex",
  gap: "24px",
});

const NumItem = styled("span", {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$primary",
});

const TextItem = styled("span", {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
});

export const Feature = () => {
  return (
    <FeatureSection>
      <FeatureElementContainer>
        <FeatureDetails>
          <FeatureDetailsHeading>Features</FeatureDetailsHeading>
          <FeatureParagraph>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </FeatureParagraph>
          <FeatureParagraph>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </FeatureParagraph>
        </FeatureDetails>
        <FeatureBoxWrapper>
          <FeatureBox>
            <FeatureBoxTitle>In the Box</FeatureBoxTitle>
            <BoxContentWrapper>
              <BoxContentItem>
                <NumItem>1x</NumItem>
                <TextItem>Headphone Unit</TextItem>
              </BoxContentItem>

              <BoxContentItem>
                <NumItem>2x</NumItem>
                <TextItem>Replacement Earcups</TextItem>
              </BoxContentItem>

              <BoxContentItem>
                <NumItem>1x</NumItem>
                <TextItem>User Manual</TextItem>
              </BoxContentItem>

              <BoxContentItem>
                <NumItem>1x</NumItem>
                <TextItem>3.5mm 5m Audio Cable</TextItem>
              </BoxContentItem>

              <BoxContentItem>
                <NumItem>1x</NumItem>
                <TextItem>Travel Bag</TextItem>
              </BoxContentItem>
            </BoxContentWrapper>
          </FeatureBox>
        </FeatureBoxWrapper>
      </FeatureElementContainer>
    </FeatureSection>
  );
};
