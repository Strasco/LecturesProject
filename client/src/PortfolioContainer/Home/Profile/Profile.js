import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/vladdanielzaharia/">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/vladdanielzaharia/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Salutare, ma numesc <span className="highlighted-text">Vlad</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Entuziasmat de tehnologie",
                    1000,
                    "Backend Development",
                    1000,
                    "Actual NodeJs Developer",
                    1000,
                    "Absolvent Inginerie Software",
                    1000,
                    "Game Developer",
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Technology is best when it brings people together. – Matt
                Mullenweg
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {" "}
              Haide sa vorbim!{" "}
            </button>
            {/* <a href="My_CV_2_0.pdf" download="My Portfolio.pdf">
              <button className="btn highlighted-btn">Get Portfolio</button>
            </a> */}
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
