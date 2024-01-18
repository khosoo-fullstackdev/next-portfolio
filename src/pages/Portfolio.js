import Header from "@/components/Header";
import Bio from "@/components/Bio";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contactme from "@/components/Contactme";
import Footer from "@/components/Footer";
export default function Portfolio() {
  return (
    <div className="w-[1440px]">
      <Header />
      <Bio />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contactme />
      <Footer />
    </div>
  );
}
