import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  // { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/soyjuanjohernandez/" },
  { Social: <FaGithub />, link: "https://github.com/soyjuanjohernandez" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()}  {" "}
            <a
              href="https://www.linkedin.com/in/soyjuanjohernandez/"
              target="_blank"
              rel="noreferrer"
            >
             Juanjohernandez
            </a>{" "}
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
