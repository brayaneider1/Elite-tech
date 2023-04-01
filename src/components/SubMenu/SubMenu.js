import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons"
import { Link, navigate } from "gatsby"
const SubMenu = ({ item, index, nodes }) => {
  const [selected, setSelected] = useState(0)
  const [subnav, setSubnav] = useState(false)

  const showSubnav = e => {
    e.preventDefault()
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
  }
  return (
    <>
      <Link
        className={selected === item.index ? "menuItem active" : "menuItem"}
        to={item.link ? item.link : "/"}
        onClick={item.subNav ? e => showSubnav(e) : () => {}}
      >
        <item.icon />
        <span>{item.heading}</span>
        {item.subNav && (
          <motion.div
            animate={
              subnav
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            <UilAngleDown />
          </motion.div>
        )}
      </Link>
      <AnimatePresence>
        {item.subNav === true &&
          subnav &&
          nodes.map((item, i) => (
            <DropdownLink
              key={i}
              variants={menuAnimation}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <SidebarLabel>{item.name}</SidebarLabel>
            </DropdownLink>
          ))}
      </AnimatePresence>
    </>
  )
}

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
