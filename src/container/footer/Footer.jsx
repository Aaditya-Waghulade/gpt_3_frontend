import React from 'react'
import './footer.css';
import logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do You Want to step into the future before Others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-logo">
          <img src={logo} alt="logo" />
          <p>All Right Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overseas</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Social Media</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Google</p>
          <p>Amazon</p>
          <p>Microsoft</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>connect us</h4>
          <p>aasityaprashantwaghulade2004@gmail.com</p>
          <p>whatsapp:- 9156203240</p>
          <p>insta:- @aadu_0076</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>29 June 2022 All rights reserved.</p>
        <p>***END****</p>
      </div>
    </div>
  )
}

export default Footer