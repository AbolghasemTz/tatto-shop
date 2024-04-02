import DeliveryHome from "@/components/DeliveryHome";
import Categories from "../../components/Categories";

import Slider from "../../components/Slider";
import TabProducts from "../../components/TabProducts";
import "../globals.css";
import VideoIntro from "@/components/VideoIntro";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <Categories />
      <TabProducts />
      <DeliveryHome />
      <VideoIntro />
    </main>
  );
}
