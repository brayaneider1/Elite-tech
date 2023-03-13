import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons"
const SubMenu = ({ item, index, nodes }) => {
  const [selected, setSelected] = useState(0)
  const [subnav, setSubnav] = useState(false)
  useEffect(() => {
    console.log("aqi==>", item)
  }, [subnav])

  const showSubnav = () => {
    setSubnav(!subnav)
  }
  const menuAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, when: "afterChildren" },
    },
    show: {
      opacity: 1,
      height: 25,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };
  return (
    <>
      <Link
        className={selected === item.index ? "menuItem active" : "menuItem"}
        to={item.link ? item.link : "/#"}
        onClick={() => showSubnav()}
      >
        <item.icon />
        <span>{item.heading}</span>
        {item.subNav && (
          <motion.div
            animate={
              subnav
                ? {
                  rotate: -90
                }
                : { rotate: 0 }
            }
          >
            <UilAngleDown />
          </motion.div>)}
      </Link>
      <AnimatePresence>
        {item.subNav === true && subnav && nodes.map((item, i) => (
          <Link to="/cart/" key={i}>
            <DropdownLink
              variants={menuAnimation}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
            >
              <SidebarLabel >{item.name}</SidebarLabel>
            </DropdownLink>
          </Link>))
        }
      </AnimatePresence>
    </>
  )
}

const SidebarLink = styled(motion.p)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`

const SidebarLabel = styled(motion.span)`
  margin-left: 30px;
`

const DropdownLink = styled(motion.div)`
 
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 10px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`

export default SubMenu
