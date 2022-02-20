import React from "react";
import chiefpatron from "../images/chiefpatron.webp";
import patron from "../images/patron.jpg";
import banner from "../images/banner.png";
import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function Body() {
  return (
    <>
    <Navbar />
    <img src={banner} className="banner_image" alt="banner"  data-aos="fade-down"/>
      <div
        id="aboutbox"
        className="container-fluid row featurette"
       
>


        <div id="engineering_and_it" className="container-fluid row featurette">
        <div className="col-md-7 about" data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading text-center">
          ABOUT ARKA JAIN UNIVERSITY<span className="text-muted"></span>
          </h2>
          <p id="aboutajudetails" className="lead">
          An academic institute ought to set its vision of high noted academic, intellectual and entrepreneurial development. 
          ARKA JAIN University (AJU), Jamshedpur is committed to human development at all levels through education and entrepreneurship. 
          It provides quality education thereby creating human assets for the nation and the globe as well. 
          AJU is a premier private university of Jharkhand with a venerable legacy of the JGI group sprinting ahead for national acclamation for noted academic standards, 
          diverse educational programs, distinguished faculties, 
          varied co- curricular activities and state-of-the-art infrastructures. 
          The University is on the way to sustain the acclaimed standards and best practices in higher education. 
          It is committed to nation building and unflinching adherence to universal university human values. 
          The sprawling university spreads across 25 acres of lush green land leaving no stone unturned in providing state-of- the-art 
          facilities in various sectors including education, sports, entrepreneurship, research, and other academic ventures. 
          The campus of the University is situated at Mohanpur, Gamharia, Dist: Seraikela – Kharsawan, 13 km from the steel city, Jamshedpur. 
          Popularly known as Tatanagar, named after the visionary industrialist Shri J.N.Tata, founder of TATA Groups. 
          The magnificence of the university lies in the enhancement of various courses with leaps and bounds. ARKA JAIN University aids each. 
          </p>
        </div>
      </div></div>
      
        

      <section>
        <div className="container-fluid mainpersons " >
          <div className="row  mainpersonbox" >
            <div className="container col-lg-4">
              <img
                src={chiefpatron}
                className="container mainpersonsimages"
                alt="Chief Patron"
              ></img>
              <h2 className="headname">Chief Patron</h2>
              <p className="headdetail">
                Prof. (Dr.) S.S. Razi, Vice Chancellor, ARKA JAIN University.{" "}
              </p>
              <p>
                <a
                  className="btn main_person_button"
                  href="https://in.linkedin.com/in/s-s-razi-6181531b1"
                  data-aos="fade-up"
                >
                  Know More »
                </a>
              </p>
            </div>

            <div className="container col-lg-4 amitsir" >
              <img
                src={patron}
                className="container mainpersonsimages"
                alt="Patron"
              ></img>
              <h2 className="headname">Patron</h2>
              <p className="headdetail">
                Mr. Amit Kumar Srivastava, Director, ARKA JAIN University.{" "}
              </p>
              <p>
                <a
                  className="btn main_person_button"
                  href="https://in.linkedin.com/in/amit-shrivastav-391a327"
                  data-aos="fade-up"
                >
                  Know More »
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="missionvissionbox">
        <div className="px-4 pt-5 my-1 text-center" data-aos="fade-down">
          <h1 className="head_size">Vission Of University</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 bodysize">
              To be among the best of the institutions for engineers and
              technologists with attitudes, skills and knowledge and to become
              an epicentre of creative solutions.
            </p>
          </div>
        </div>

        <div className="px-4 my-5 text-center mission" data-aos="fade-down">
          <h1 className=" head_size">Mission Of University</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 bodysize">
              To achieve and impart quality education with an emphasis on
              practical skills and social relevance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
