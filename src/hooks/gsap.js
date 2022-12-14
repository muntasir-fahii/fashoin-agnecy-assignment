import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroImageSlide = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100%",
        width: 0,
      },
      {
        x: 0,
        width: "100%",
        duration: 5,
      }
    );
  }, []);
};

export const useGsapAboutLeftSlide = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 2,
        ease: Expo.easeOut,
      }
    );
  }, []);
};

export const useGsapAboutRightSlide = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "100%",
      },
      {
        x: 0,
        duration: 2,
        ease: Expo.easeOut,
      }
    );
  }, []);
};

export const useGsapAboutDown = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: "20%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: Expo.easeOut,
      }
    );
  }, []);
};
