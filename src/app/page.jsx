import Categories from "./components/Categories";
import CountNumber from "./components/CountNumber";
import Gallery from "./components/Gallery";
import Slider from "./components/Slider";
import TestimonialSlider from "./components/TestimonialSlider";
import "./globals.css";

export default function Home() {
  return (
   <main>
    <Slider />
    <Categories />
    <Gallery />
    <CountNumber />
    <TestimonialSlider />
   </main>
  );
}
