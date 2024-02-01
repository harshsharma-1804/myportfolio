import React from "react";
import PropTypes from "prop-types";
import bimg from "../resources/images/R.png";
import cimg from "../resources/images/card-bg.png";


const description =
  "I'm a B.Tech Electronics and Communication Engineering student studying at University School of Information, Communication and Technology a constituent school of Guru Gobind Singh Indraprastha University. I enjoy the process of learning and creating new things. I am a self taught web developer and a UI/UX designer. I am currently looking for an internship in the field of web development and UI/UX design. Please find my resume below.";


// const skillsList = [
//   "Web design",
//   "User experience",
//   "Inclusive design",
//   "Focus group testing",
//   "Mobile user interfaces",
//   "Graphic design",
// ];


const About = (props) => {
    const{
        name,
        surname,
        title,
    }= props;

    return(
        <section id="about">
            <img className="bimg" src={bimg} alt= "bgimg" />

             <div className="about-above">
                 <p className="name"> {name} <br/>{surname}</p>
                 <p className="subname">{title}</p>
             </div>

             <div className="about-below" id="about-below">
             <img className="cimg" src={cimg} alt="card-bg"/>
                <div className="about-below-inner">
                    <div className="about-heading">
                        <h1>About Me</h1>
                        <hr style={{width:"30%", margin:" 10px 0px"}}></hr>
                    </div>
                    <div className="about-content">
                        <p>{description}</p>
                    </div>
                </div>
             </div>
         </section>
    )
}

About.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
};

export default About;