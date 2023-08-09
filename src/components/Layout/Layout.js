import React, { useState } from "react"
import Sidebar from "../Sidebar"
import whatsapp from "../../images/whatsapp-alt.svg"
import { motion } from "framer-motion"
import { SideResponsive } from "../SideResponsive/SideResponsive"
import ReactWhatsapp from "react-whatsapp"
import { Footer } from "../Footer/Footer"
import { HeaderC } from "../Header/Header"

const Layout = ({ children }) => {
  const [expanded, setExpaned] = useState(true)
  const [sideExpanded, setSideExpaned] = useState(false)

  const handleExpaned = () => {
    setSideExpaned(!sideExpanded)
    setExpaned(!expanded)
  }

  return (
    <div className="content-AppGlass">
      <HeaderC handleExpanded={handleExpaned} />
      <div className="AppGlass">
        <SideResponsive
          setSideExpaned={setSideExpaned}
          sideExpanded={sideExpanded}
        />

        <motion.div
          className={`content-main${sideExpanded ? "--expanded" : ""}`}
          animate={expanded ? `${expanded}` : `${expanded}`}
        >
          {children}
          <ReactWhatsapp
            style={{ background: "transparent", border: "transparent" }}
            className="wrappper-wp-btn"
            number="573175607784"
            message="Hola,buen dia mi nombre es: "
          >
            <a about="_blank" className="float-container" href="#">
              <img className="whatsapp" src={whatsapp} alt="" />
            </a>{" "}
          </ReactWhatsapp>
        </motion.div>
      </div>
    </div>
  )
}

export default Layout
