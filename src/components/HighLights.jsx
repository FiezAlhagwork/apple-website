import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousle from "./VideoCarousle";
import { animateWithGsap } from "../utils/animations";

const HighLights = () => {
  useGSAP(() => {
    animateWithGsap("#title", { opacity: 1, y: 0 })
    // gsap.to("#title", { opacity: 1, y: 0 });
    animateWithGsap(".link", { opacity: 1, y: 0 ,duration:1,stagger:0.25 })
  }, []);
  return (
    <section
      id="highLights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      {/* container */}
      <div className="screen-max-width">

        <div className="mb-12 w-full md:flex  justify-between">
          <h1 id="title" className="section-heading">
            {" "}
            Get the highlights.
          </h1>
          <div className="flex items-end flex-wrap gap-5 ">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watchImg" className="ml-2"/>
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="rightImg" className="ml-2"/>
            </p>
          </div>
        </div>

        <VideoCarousle/>

      </div>
    </section>
  );
};

export default HighLights;
