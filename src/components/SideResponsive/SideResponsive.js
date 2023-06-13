import React from "react"
import Logo from "../../imgs/logo.png"
import { UilListUl, UilTimes } from "@iconscout/react-unicons"
import { SidebarData } from "../../Data/Data"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import SubMenu from "../SubMenu/SubMenu"

export const SideResponsive = () => {
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

  return (
    <div className="side-responsive">
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <UilListUl id="btn" />
        <UilTimes id="cancel" />
      </label>
      <div className="sidebar">
        <header>
          {" "}
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </header>
        {SidebarData.map((item, i) => {
          return <SubMenu item={item} nodes={nodes} index={i} key={i} />
        })}
      </div>
    </div>
  )
}
