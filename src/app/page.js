import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import WorkingAreas from "./components/WorkingAreas";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <WorkingAreas />
      <CallToAction />
      <Testimonials />
      <Faqs />
      <Contact />
    </div>
  );
}
