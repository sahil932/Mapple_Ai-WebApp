import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Problems from "@/components/Problems";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-navy-950">
          <Hero />
        </div>
        <TrustBar />
        <Services />
        <Problems />
        <Industries />
        <Process />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
