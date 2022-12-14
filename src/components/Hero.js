import { useRef } from "react";
import { useHeroImageSlide } from "../hooks/gsap";

const Hero = () => {
  const heroImageSlide = useRef(null);

  useHeroImageSlide(heroImageSlide);

  return (
    <section className="hero-image wrapper" ref={heroImageSlide}>
      <img
        src="https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?w=1380&t=st=1670869692~exp=1670870292~hmac=22ae95e19a9c17be9b7f98c1365c8ae530e70e22e19eea84be05fa01eca44f4b"
        alt="hero img"
      />
    </section>
  );
};

export default Hero;
