import React, { useState } from "react"
import Sidebar from "../Sidebar"
import whatsapp from "../../images/whatsapp-alt.svg"
import { motion } from "framer-motion"
import { SideResponsive } from "../SideResponsive/SideResponsive"

const Layout = ({ children }) => {
  const [expanded, setExpaned] = useState(true)

  return (
    <div className="content-AppGlass">
      <div className="AppGlass">
        <SideResponsive/>
{/*         <Sidebar setExpaned={setExpaned} expanded={expanded} />
 */}
        <motion.div
          className="content-main"
          animate={expanded ? `${expanded}` : `${expanded}`}
        >
          {children}
          <a className="float-container" href="https://wa.me/573175607784">
            <img className="whatsapp" src={whatsapp} alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Layout
