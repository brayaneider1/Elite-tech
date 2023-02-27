import React from 'react'
import Sidebar from '../Sidebar'

const Layout = ({children}) => {
  return (
    <div className="content-AppGlass">

    <div className="AppGlass">
      <Sidebar />
      {/* <MainDash /> */}
      <div className="content-main">
        {children}
      </div>
    </div>
  </div>
  )
}

export default Layout