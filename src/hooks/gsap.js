import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShuterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapDownStager = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: "100",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: Expo.easeIn,
        delay: delay,
      }
    );
  }, []);
};

// gasp

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
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
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
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
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
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
