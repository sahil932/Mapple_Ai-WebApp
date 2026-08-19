import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Problems from "@/components/Problems";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-navy-950">
          <Hero />
          <TrustBar />
        </div>
        <Services />
        <Problems />
        <Industries />
        <WhyUs />
        <Process />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
