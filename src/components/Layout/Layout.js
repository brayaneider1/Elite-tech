import React from "react"
import Sidebar from "../Sidebar"
import whatsapp from "../../images/whatsapp-alt.svg"

const Layout = ({ children }) => {
  return (
    <div className="content-AppGlass">
      <div className="AppGlass">
        <Sidebar />

        <div className="content-main">
          {children}
          <a href="https://wa.me/573175607784">
            <img className="whatsapp" src={whatsapp} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Layout
