import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons"
const SubMenu = ({ item, index, nodes }) => {
  console.log("🚀 ~ file: SubMenu.js:6 ~ SubMenu ~ index, nodes:", item)
  const [selected, setSelected] = useState(0)
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => {
    console.log("aqi==>")
    setSubnav(!subnav)
  }
  return (
    <>
      <Link
        className={selected === item.index ? "menuItem active" : "menuItem"}
        to={item.link ? item.link : "/#"}
        onClick={() => showSubnav()}
      >
        <item.icon />
        <span>{item.heading}</span>
        {item.subNav && subnav ? (
          <UilAngleDown />
        ) : item.subNav ? (
          <UilAngleUp />
        ) : null}
      </Link>
      {item.subNav === true && subnav
        ? nodes.map(item => {
            return (
              <DropdownLink to={item.path} key={index}>
                {/* {item.icon} */}
                <SidebarLabel>{item.name}</SidebarLabel>
              </DropdownLink>
            )
          })
        : null}
    </>
  )
}

const SidebarLink = styled(Link)`
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

const SidebarLabel = styled.span`
  margin-left: 16px;
`

const DropdownLink = styled(Link)`
  background: #414757;
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
