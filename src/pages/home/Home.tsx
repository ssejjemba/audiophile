import { styled } from "@stitches/react";
import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { Hero } from "../../sections/hero/Hero";
import { Categories } from "../../sections/categories/Categories";
import { Product9Speakers } from "../../sections/product-9speakers/Product9Speakers";
import { Product7Speakers } from "../../sections/product-7speakers/Product7Speakers";
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
        <NavigationBar hasBorder />
        <Hero />
      </HomeSection>
      <Categories />
      <Product9Speakers />
      <Product7Speakers />
      <ProductEarphones />
      <Blog />
      <Footer />
    </>
  );
}
