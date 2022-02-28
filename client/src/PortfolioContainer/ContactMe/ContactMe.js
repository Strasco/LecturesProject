import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.png";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function Contactme(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post("/contact", data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const contactDetails = [
    { entry1: "Nume", entry2: "Vlad Daniel Zaharia" },
    { entry1: "Telefon", entry2: "0725078292" },
    { entry1: "E-mail", entry2: "vlad.zaharia95@gmail.com" },
  ];

  const listDetails = () => {
    return contactDetails.map((detail, index) => (
      <li key={index}>
        <div className="contact-title">{detail.entry1}</div>
        <div className="contact-entry">{detail.entry2}</div>
      </li>
    ));
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading
        subHeading={"Pastram legatura!"}
        title={"Contacteaza-ma"}
      />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Ai o intrebare ?",
                1000,
                "Suna-ma la numarul de telefon",
                1000,
                "Sau trimite-mi un mail",
                1000,
              ]}
            />
          </h2>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Detalii de contact:</h4>
            {/* <img src={imgBack} alt="image is missing" /> */}
            <ul>{listDetails()}</ul>
          </div>
          {/* <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}
