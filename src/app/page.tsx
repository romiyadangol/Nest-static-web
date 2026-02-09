import Brand from "@/components/sections/Brand";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/HeroSection";
import Platform from "@/components/sections/Platform";
import Pricing from "@/components/sections/Pricing";
import Sales from "@/components/sections/Sales";
import Solution from "@/components/sections/Solution";
import Testimonals from "@/components/sections/Testimonals";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Testimonals/>
      <Pricing/>
      <Platform/>
      <Solution/>
      <Brand/>
      <Faq/>
      <Sales/>
      <Footer/>
    </>
  )
}