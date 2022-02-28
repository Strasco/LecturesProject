import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Ajutor Bacalaureat", logoSrc: "education.svg" },
    { label: "Curs Programare Incepatori", logoSrc: "projects.svg" },
    { label: "Website Prezentare", logoSrc: "programming-skills.svg" },
    // { label: "Application Skills", logoSrc: "programming-skills.svg" },
    // { label: "Projects", logoSrc: "projects.svg" },
    // { label: "Interests", logoSrc: "interests.svg" },
  ];

  // const programmingSkillsDetails = [
  //   { skill: "Python", ratingPercentage: 85 },
  //   { skill: "R Languange", ratingPercentage: 65 },
  //   { skill: "php", ratingPercentage: 65 },
  //   { skill: "Scikit Learn", ratingPercentage: 80 },
  //   { skill: "Node JS", ratingPercentage: 65 },
  //   { skill: "Mongo Db", ratingPercentage: 75 },
  //   { skill: "SQL Server", ratingPercentage: 90 },
  //   { skill: "HTML", ratingPercentage: 60 },
  //   { skill: "CSS", ratingPercentage: 65 },
  //   { skill: "Django", ratingPercentage: 65 },
  //   { skill: "ArcGIS Model Builder", ratingPercentage: 75 },
  //   { skill: "Kafka", ratingPercentage: 65 },
  //   { skill: "MySQL", ratingPercentage: 75 },
  // ];

  // const applicationSkillsDetails = [
  //   { skill: "PowerBI", ratingPercentage: 80 },
  //   { skill: "Talend Open Studio", ratingPercentage: 85 },
  //   { skill: "ArcGIS Platform", ratingPercentage: 85 },
  //   { skill: "Grafana", ratingPercentage: 75 },
  //   { skill: "Azure Cloud Server", ratingPercentage: 50 },
  //   { skill: "E&P - Petrel", ratingPercentage: 70 },
  //   { skill: "E&P - Kingdom", ratingPercentage: 85 },
  //   { skill: "E&P - Hampson-Russell", ratingPercentage: 85 },
  //   { skill: "E&P - Paradigm", ratingPercentage: 75 },
  // ];

  const projectsDetails = [
    {
      title: "Near Real-Time Production DATA REST-API",
      duration: { fromDate: "April 2021", toDate: "June 2021" },
      description:
        "GET APIs services push to external partner for real-time data communication.",
      subHeading:
        "Technologies Used: MongoDB, Node JS, Talend Open Studio, NGINX.",
    },
    {
      title: "ETL push process for production data",
      duration: { fromDate: "2019", toDate: "present" },
      description:
        "A robust mechanism to push daily production data to external as reporting services.",
      subHeading: "Technologies Used:  Talend Open Studio, SQL Server.",
    },
    {
      title: "E&P Data Management Development Project",
      duration: { fromDate: "2016", toDate: "2019" },
      description:
        "Build data integration and GIS web server to maintain E&P technical data.",
      subHeading:
        "Technologies Used: Python, GIS Server, ArcGIS Desktop, PPDM Data Model, .Net DNN Platform.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Atestate Bacalaureat si documentatie"}
        subHeading={
          "Te putem ajuta cu documentatia si scrierea website-ului pentru atestatele de bacalaureat, un website cu toate cele necesare, HTML, CSS, Bootstrap si JavaScript "
        }
        fromDate={"250"}
        toDate={"RON"}
      />

      <ResumeHeading
        heading={"Meditatii ajutor programare"}
        subHeading={
          "Aprofundare tehnica si ajutor in rezolvarea problemelor de programare"
        }
        fromDate={"50 RON"}
        toDate={"ora"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Curs de programare pentru stapanirea bazelor programarii"}
          subHeading={"Curs Programare"}
          fromDate={"3 luni"}
          toDate={" 1500 RON"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Acest curs de programare pentru incepatori va consta in deprinderea
            bazelor pentru un demaraj eficient in industrie. Cursul va cuprinde
            cat mai multa practica si doar teoria necesara pentru a intelege
            anumite concepte ce sunt mereu cerute la interviuri.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Cursul va cuprinde: Invatarea cuvintelor cheie a limbajului de
            programare, scrierea de functii, tipurile de date ce sunt cel mai
            des folosite, structuri de date, crearea a catorva mini proiecte,
            programe de gestionare a versiunii, design patterns si principiile
            SOLID ale programarii.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Website-uri de prezentare pentru afacarea ta"}
          subHeading={"Website Prezentare"}
          fromDate={"Incepand de la"}
          toDate={"2500 RON"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Daca vrei sa-ti cresti afacerea, si sa o faci mai vizibila in lumea
            digitala, un website unul dintre primii pasi ce ar trebui sa ii faci
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Cursul va cuprinde: Invatarea cuvintelor cheie a limbajului de
            programare, scrierea de functii, tipurile de date ce sunt cel mai
            des folosite, structuri de date, crearea a catorva mini proiecte,
            programe de gestionare a versiunii, design patterns si principiile
            SOLID ale programarii.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* Application SKILLS */
    // <div
    //   className="resume-screen-container application-skills-container"
    //   key="application-skills">
    //   {applicationSkillsDetails.map((skill, index) => (
    //     <div className="skill-parent" key={index}>
    //       <div className="heading-bullet"></div>
    //       <span>{skill.skill}</span>
    //       <div className="skill-percentage">
    //         <div
    //           style={{ width: skill.ratingPercentage + "%" }}
    //           className="active-percentage-bar"></div>
    //       </div>
    //     </div>
    //   ))}
    // </div>,

    /* PROJECTS */
    // <div className="resume-screen-container" key="projects">
    //   {projectsDetails.map((projectsDetails, index) => (
    //     <ResumeHeading
    //       key={index}
    //       heading={projectsDetails.title}
    //       subHeading={projectsDetails.subHeading}
    //       description={projectsDetails.description}
    //       fromDate={projectsDetails.duration.fromDate}
    //       toDate={projectsDetails.duration.toDate}
    //     />
    //   ))}
    // </div>,

    /* Interests */
    // <div className="resume-screen-container" key="interests">
    //   <ResumeHeading
    //     heading="Sports"
    //     description="Like to cycling, basketball and swimming."
    //   />
    //   <ResumeHeading
    //     heading="Hydroponics"
    //     description="Build my own hydroponics system and step-by-step understanding the process."
    //   />
    //   <ResumeHeading
    //     heading="Investment"
    //     description="Started to invest in farming area include ducks and sheep also interest in stock market investment"
    //   />
    // </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}>
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Servicii"} subHeading={"Ce iti putem oferi"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
