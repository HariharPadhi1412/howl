import React from "react";
import "./footer.css";
import facebook from "../Assets/facebook.png";
import insta from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import linkedin from "../Assets/linkedin.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="img-logo">
          <img src={facebook} alt="facebooklogo" className="fimg" />
          <img src={insta} alt="twitterlogo" className="iimg" />
          <img src={twitter} alt="instagramlogo" className="timg" />
          <img src={linkedin} alt="Lnflogo" className="lnimg" />
        </div>
        <div className="textfooter">
          <span>PRESS</span>
          <span>CAREERS</span>
          <span>JOIN THE PACK</span>
        </div>
        <div className="footer-btn">
          <button className="footer-btn-i">Sign up to our newsletter</button>
          <img src="" alt="arr" />
        </div>
        <div className="footer-text-2"></div>
      </div>
    </>
  );
}

export default Footer;
