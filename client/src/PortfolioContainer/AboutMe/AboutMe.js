import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Actual NodeJs Backend Developer la Globant. Am terminat studiile in cadrul facultatii VIA University College, pe profilul Software Engineering in Horsens, Danemarca, unde in timpul studiilor am avut un internship la firma See.Sense in Irlanda de Nord si sunt mandrul dezvoltator a doua jocuri comerciale: Tower Watch(Google Play) si Swordrite(Steam)",
    highlights: {
      bullets: [
        "Backend Development cu NodeJs si Express",
        "Javascript",
        "Unity3D Development cu C#",
        "Basic HTML, CSS, React",
        "Basic ASP.NET",
        "MongoDB, Redis, Entity Framework",
        "Java",
      ],
      heading: "Abilitati practice:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight " key={i}>
        <div className="highlight-blob "></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in "
      id={props.id || ""}>
      <div className="about-me-parent ">
        <ScreenHeading
          title={"Despre mine"}
          subHeading={"Prezentarea portofoliului meu"}
        />
        <div className="about-me-card ">
          <div className="about-me-profile"></div>
          <div className="about-me-details ">
            <span className="about-me-description ">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights ">
              <div className="highlight-heading ">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options ">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                {" "}
                Haide sa vorbim!{" "}
              </button>
              {/* <a href="My_CV_2_0.pdf" download="My Portfolio.pdf">
                <button className="btn highlighted-btn ">Get Portfolio</button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
