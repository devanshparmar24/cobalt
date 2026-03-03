import Hero from "@/components/sections/Hero";
import Testimonial from "@/components/sections/Testimonial";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import DashboardPreview from "@/components/sections/DashboardPreview";
import Feature1 from "@/components/sections/Feature1";
import Feature2 from "@/components/sections/Feature2";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Feature1 />
      <Feature2 />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}