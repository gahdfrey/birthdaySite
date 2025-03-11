// import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
// import Nav from "@/components/Nav";
import Slider from "@/components/Slider";
import VaraText from "@/components/VaraText";

export default function Home() {
  return (
    <main
      className={` font-cursive relative p-4  min-h-screen bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: "url('/IMG_1985.JPG')" }}
    >
      <div className="max-w-[1170px] mx-auto">
        {/* Overlay div */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Content (ensuring it's above the overlay) */}
        <div className="relative z-10">
          {/* <Nav /> */}
          <VaraText text={""} />
          <Slider />
          <Footer />
        </div>
      </div>
    </main>
  );
}
