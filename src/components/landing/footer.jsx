import React from "react";
import "/src/styles/footer/footer.css";
import Logo from "../../assets/vectors/logo.svg"
import Instagram from "../../assets/vectors/instagram.svg";
import Twitter from "../../assets/vectors/twitter.svg";
import Linkedin from "../../assets/vectors/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-column-large">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer-column">
          <h3>Adopt</h3>
          <ul>
            <li>
              <a href="#">Available Pets</a>
            </li>
            <li>
              <a href="#">Adoption Process</a>
            </li>
            <li>
              <a href="#">Adoption FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get Involved</h3>
          <ul>
            <li>
              <a href="#">Volunteer Opportunities</a>
            </li>
            <li>
              <a href="#">Volunteer Spotlight</a>
            </li>
            <li>
              <a href="#">Ways to Donate</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Blog</h3>
          <ul>
            <li>
              <a href="#">Latest Posts</a>
            </li>
            <li>
              <a href="#">Community Posts</a>
            </li>
            <li>
              <a href="#">Popular Topics</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <p>&copy; Petopia 2024. All Right Reserved.</p>
        <div className="footer-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
