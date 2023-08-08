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
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  }
  return (
    <>
      <Link
        to={item.link ? item.link : "/"}
        onClick={item.subNav ? e => showSubnav(e) : () => {}}
      >
        <div className="link-menu">
          <item.icon />
          <span>{item.heading}</span>
          {item.subNav && (
            <motion.div
            style={{marginLeft:'20px'}}
              animate={
                subnav
                  ? {
                      rotate: 0,
                    }
                  : { rotate: -90 }
              }
            >
              <UilAngleDown />
            </motion.div>
          )}
        </div>
      </Link>
      <AnimatePresence>
        {item.subNav === true &&
          subnav &&
          nodes.map((item, i) => (
            <DropdownLink
            className="dropdown-items"
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
  margin-left: 0px;
`

const DropdownLink = styled(motion.div)`
  height: auto;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  padding: 6px 0;
  text-decoration: none;
  color: white;
  font-size: 12px;
  font-weight: 500;
  &:hover {
    background: #f0f8ff00;
    cursor: pointer;
    color: #05f29b;
  }
  &:focus {
    color: white;
  }
`

export default SubMenu
