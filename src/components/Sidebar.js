import React, { useState } from "react"
import "./Sidebar.css"
import Logo from "../imgs/logo.png"
import { UilSignOutAlt } from "@iconscout/react-unicons"
import { UilBars } from "@iconscout/react-unicons"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import SubMenu from "./SubMenu/SubMenu"
import { SidebarData } from "../Data/Data"

const Sidebar = ({expanded, setExpaned}) => {
  const {
    allChecCategory: { nodes },
  } = useStaticQuery(graphql`
    query CategoryQuery {
      allChecCategory {
        nodes {
          name
          id
        }
      }
    }
  `)


var Window
if (typeof window !== 'undefined') {
  Window=window

}


  const sidebarVariants = {
    true: {
      left: "0",
      transition: { duration: 0.4 }
    },
    false: {
      left: "-60%",
      transition: { duration: 0.4 }
    },
  }
  return (
    <>
      <div
        className="bars"
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={Window?.innerWidth <= 768 ? `${expanded}` : `${expanded}`}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, i) => {
            return <SubMenu item={item} nodes={nodes} index={i} key={i} />
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
