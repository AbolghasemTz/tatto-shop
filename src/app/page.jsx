import Categories from "./components/Categories";
import ContactMe from "./components/ContactMe";
import CountNumber from "./components/CountNumber";
import Gallery from "./components/Gallery";
import Slider from "./components/Slider";
import TestimonialSlider from "./components/TestimonialSlider";
import VideoIntro from "./components/VideoIntro";
import "./globals.css";

export default function Home() {
  return (
   <main>
    <Slider />
    <Categories />
    <Gallery />
    <CountNumber />
    <TestimonialSlider />
    <VideoIntro />
    <ContactMe />
   </main>
  );
}
