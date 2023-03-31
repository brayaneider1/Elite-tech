import React, { useState } from "react"
import Sidebar from "../Sidebar"
import whatsapp from "../../images/whatsapp-alt.svg"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const [expanded, setExpaned] = useState(true)
  const sidebarVariants = {
    true: {
      left: "224px",
      transition: { duration: 0.5 }
    },
    false: {
      left: "10px",
      transition: { duration: 0.5 }
    },
  }
  return (
    <div className="content-AppGlass">
      <div className="AppGlass">
        <Sidebar setExpaned={setExpaned} expanded={expanded} />

        <motion.div
          className="content-main"
          variants={sidebarVariants}
          animate={expanded ? `${expanded}` : `${expanded}`}
        >
          {children}
          <a href="https://wa.me/573175607784">
            <img className="whatsapp" src={whatsapp} alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Layout
