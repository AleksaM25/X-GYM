import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <footer id="section-3" className="footer">
      <div className="borderLine"></div>
      <div className="footerWrapper">
        <section className="contact">
          <h4>DRUSTVENE MREZE:</h4>
          <ul>
            <li>
              <InstagramIcon />
              <a href="https://www.instagram.com/xgymnovisad/">xgymnovisad</a>
            </li>
            <li>
              <FacebookIcon />
              <a href="https://www.facebook.com/xgymnovisad2008">X-GYM</a>
            </li>
            <li>
              <MailOutlineIcon />
              <a href="#"> miljanradulovic@gmail.com</a>
            </li>
            <h4>KONTAKT:</h4>
            <li className="kontakt">
              <p>064115215</p>
            </li>
          </ul>
        </section>
        <map className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11234.677446600303!2d19.78689758715819!3d45.254478399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11c9fba5f5b7%3A0x805fffc4b6535f77!2sX-Gym!5e0!3m2!1sen!2srs!4v1683045440931!5m2!1sen!2srs"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </map>
      </div>
    </footer>
  );
};

export default Footer;
