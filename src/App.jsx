import { ReactLenis } from 'lenis/react'

import About from "@/components/About";
import Cocktails from "@/components/Cocktails";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <>
    <ReactLenis root options={{ lerp: 0.12 }} />
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
    </>
  );
}
