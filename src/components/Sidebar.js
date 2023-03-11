import React, { useEffect, useState } from "react"
import "./Sidebar.css"
import Logo from "../imgs/logo.png"
import { UilSignOutAlt } from "@iconscout/react-unicons"
import { SidebarData } from "../Data/Data"
import { UilBars } from "@iconscout/react-unicons"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "@gatsbyjs/reach-router"
import SubMenu from "./SubMenu/SubMenu"

const Sidebar = () => {
  const [expanded, setExpaned] = useState(true)
  const {
    allChecCategory: { nodes },
  } = useStaticQuery(graphql`
    query CategoryQuery {
      allChecCategory {
        nodes {
          name
        }
      }
    }
  `)

  useEffect(() => {
    console.log("🚀 ~ file: Sidebar.jsx:11 ~ Sidebar ~ Data:", nodes)
  }, [nodes])

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  }
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} nodes={nodes} index={index} />
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
