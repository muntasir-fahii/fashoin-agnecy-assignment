import { useRef } from "react";
import {
  useGsapAboutDown,
  useGsapAboutLeftSlide,
  useGsapAboutRightSlide,
} from "../hooks/gsap";

const About = () => {
  const aboutRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);

  useGsapAboutDown(aboutRef);
  useGsapAboutLeftSlide(aboutImageRef);
  useGsapAboutRightSlide(aboutTextRef);

  return (
    <section className=" wrapper">
      <div className="about">
        <h2 className="about-headline" ref={aboutRef}>
          Ab<span>out</span>
        </h2>
        <div className="about-image" ref={aboutImageRef}>
          <img
            src="https://images.pexels.com/photos/3400764/pexels-photo-3400764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="photo"
          />
        </div>
        <div className="about-text" ref={aboutTextRef}>
          <p>
            The Modeling Agency «Fashion Models Management» began its career in
            2011.
            <br />
            <br />
            While Models from other agency’s work on small side gigs, or meets
            guests at fashion shows, the models of « Fashion Models Management»
            perform in New York, Paris and Milan fashion shows, as well as
            fashion week.
            <br />
            <br /> They work with famous photographer’s world wide. They appear
            on the top covers of Harper’s Bazaar, Elle, Marie Claire , Cover,
            Telva, Madame Figaro,IO Donna and ect.
            <br />
            <br /> «Fashion Models Management» is the modeling agency that other
            professional modeling agencies turn to, to find new faces. The
            philosophy of our project is to be the best, respectable, and
            professional agency there is in the modeling industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
