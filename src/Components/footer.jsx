import React from "react";
import PropTypes from "prop-types";

import envelopeIcon from "../resources/images/socials/envelope.svg";
import gitHubIcon from "../resources/images/socials/github.svg";
import instagramIcon from "../resources/images/socials/instagram.svg";
import linkedInIcon from "../resources/images/socials/linkedin.svg";
import twitterIcon from "../resources/images/socials/twitter.svg";
// import youTubeIcon from "../resources/images/socials/youtube.svg";


const Footer = (props) =>{

    const {
        email,
        gitHub,
        instagram,
        linkedIn,
        twitter,
        // youTube,
        // name,
        // surname
    } = props;
    

    return(
        <div id="footer">
          <div className="footer-inner">
            {email && (
              <a href={`mailto:${email}`}>
                <img src={envelopeIcon} alt="email" className="socialIcon" />
              </a>
            )}
        
            {gitHub && (
              <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
                <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
              </a>
            )}
            {instagram && (
              <a
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" className="socialIcon" />
              </a>
            )}
            {linkedIn && (
              <a
                href={`https://www.linkedin.com/in/${linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
              </a>
            )}
        
          {twitter && (
            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="socialIcon" />
            </a>
          )}
          {/* {youTube && (
            <a
              href={`https://www.youtube.com/c/${youTube}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
            </a>
          )} */}
        </div>
        {/* <p className="small" style={{ marginTop: 0,  }}>
          Created by {name} {surname}
        </p> */}
       </div>
    );
}

// Footer.defaultProps = {
//   name: "",
// };

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  // youTube: PropTypes.string,
};


export default Footer;