import React from 'react'
import { HeaderC } from '../Header/Header'
import Sidebar from '../Sidebar'
import SidebarDrop from '../SidebarDrop/SidebarDrop'

const Layout = ({children}) => {
  return (
    <div className="content-AppGlass">

    <div className="AppGlass">
      <Sidebar />
      {/* <SidebarDrop/> */}
      {/* <HeaderC/> */}
      {/* <MainDash /> */}
      <div className="content-main">
        {children}
      </div>
    </div>
  </div>
  )
}

export default Layout