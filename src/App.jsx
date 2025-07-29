import React,{useRef, useEffect} from 'react'
import Lenis from 'lenis';
import "./App.css";
const Navbar = React.lazy(()=>import("./components/Navbar"));
const Hero = React.lazy(()=>import("./components/Hero"));
const Spec = React.lazy(()=>import("./components/Spec"));
const App = () => {
const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
    <Navbar/>
    <Hero/>
    <Spec/>
    </>
  )
}

export default App