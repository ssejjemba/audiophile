import { styled } from "@stitches/react";

type GalleryProps = {
  sideTopURL: string;
  sideTopAlt: string;
  sideBottomURL: string;
  sideBottomAlt: string;
  mainStreamURL: string;
  mainStreamAlt: string;
};

const GallerySection = styled("section", {
  width: "100%",
  height: "100%",
  paddingBottom: "50px",
});

const GalleryElementContainer = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "32px",
});

const GallerySideTopBox = styled("div", {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
});

const GallerySideBottomBox = styled("div", {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
});

const GallerySideMainBox = styled("div", {
  width: "100%",
  height: "auto",
  gridColumn: "2 / 3",
  gridRow: "-1 / span 2",
  borderRadius: "8px",
});

const GalleryImg = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "8px",
});

export const Gallery = (props: GalleryProps) => {
  return (
    <GallerySection>
      <GalleryElementContainer>
        <GallerySideTopBox>
          <GalleryImg src={props.sideTopURL} alt={props.sideTopAlt} />
        </GallerySideTopBox>
        <GallerySideBottomBox>
          <GalleryImg src={props.sideBottomURL} alt={props.sideBottomAlt} />
        </GallerySideBottomBox>
        <GallerySideMainBox>
          <GalleryImg src={props.mainStreamURL} alt={props.mainStreamAlt} />
        </GallerySideMainBox>
      </GalleryElementContainer>
    </GallerySection>
  );
};
