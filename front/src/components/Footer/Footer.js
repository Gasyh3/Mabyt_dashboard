import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__contact">
          <h3 className="footer__title">Contact</h3>
          <p>Call us : +33 1 42 42 42 42</p>
        </div>
        <div className="footer__link">
          <h3 className="footer__title">Link</h3>
          <ul className="footer__ul">
            <li>
              <a className="footer__li" href="#!">
                À propos
              </a>
            </li>
            <li>
              <a className="footer__li" href="#!">
                Cookies
              </a>
            </li>
            <li>
              <a className="footer__li" href="#!">
                2022
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">© 2022 Copyright by KA&FC</div>
    </div>
  );
}

export default Footer;
