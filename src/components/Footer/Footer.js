import React from "react"
import "./Footer.scss"
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaAt,
  FaBuilding,
} from "react-icons/fa"
import LogoWhite from "../../imgs/LogoWhite.png"
import LogoNodos from "../../imgs/Nodos.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top__item">
          <FaBuilding />
          <span>Calle 1 #23-43</span>
        </div>
        <div className="footer__top__item">
          <FaAt />
          <span>Elitetech612@gmail.com</span>
        </div>
        <div className="footer__top__item">
          <FaPhone />
          <span>+57 321 327 2744 </span>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="socials">
          <a about="_blank" href="https://web.facebook.com/elitetechnology2020">
            <FaFacebook />
          </a>
          <a
            about="_blank"
            href="https://www.instagram.com/elite.technology1/?hl=es"
          >
            <FaInstagram />
          </a>
          <a about="_blank" href="https://wa.me/15551234567">
            <FaWhatsapp />
          </a>
        </div>
        <div className="business">
          <img src={LogoNodos} />
          <span>Elit tech.</span>
        </div>
      </div>
      <div className="rights">Derechos reservados Elite tech @ 2023</div>
    </footer>
  )
}
