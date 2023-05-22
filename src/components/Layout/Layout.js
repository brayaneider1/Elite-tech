import React, { useState } from "react"
import Sidebar from "../Sidebar"
import whatsapp from "../../images/whatsapp-alt.svg"
import { motion } from "framer-motion"
import { SideResponsive } from "../SideResponsive/SideResponsive"
import ReactWhatsapp from "react-whatsapp"
import { Footer } from "../Footer/Footer"

const Layout = ({ children }) => {
  const [expanded, setExpaned] = useState(true)

  return (
    <div className="content-AppGlass">
      <div className="AppGlass">
        <SideResponsive />
        {/*         <Sidebar setExpaned={setExpaned} expanded={expanded} />
         */}
        <motion.div
          className="content-main"
          animate={expanded ? `${expanded}` : `${expanded}`}
        >
          {children}
          <ReactWhatsapp
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
