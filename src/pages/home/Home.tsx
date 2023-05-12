import { styled } from "@stitches/react";
import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { Hero } from "../../sections/hero/Hero";
import { Categories } from "../../sections/categories/Categories";
import { Zx9Speakers } from "../../sections/zx9-speakers/Zx9Speakers";
import { Zx7Speakers } from "../../sections/zx7-speakers/Zx7Speakers";
import { ProductEarphones } from "../../sections/product-earphones/productEarphones";
import { Blog } from "../../sections/blog/Blog";
import { Footer } from "../../sections/footer/Footer";

const HomeSection = styled("section", {
  background: "$secondary",
  width: "100%",
  height: "100vh",
  paddingLeft: "165px",
  paddingRight: "165px",
});

export default function Home() {
  return (
    <>
      <HomeSection>
        <NavigationBar />
        <Hero />
      </HomeSection>
      <Categories />
      <Zx9Speakers />
      <Zx7Speakers />
      <ProductEarphones />
      <Blog />
      <Footer />
    </>
  );
}
