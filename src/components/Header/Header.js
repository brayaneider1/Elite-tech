import React, { useState, useEffect } from "react"
import { InputComponent } from "../InputComponent/InputComponent"
import { useAuth0 } from "@auth0/auth0-react"
import { UilShoppingCartAlt } from "@iconscout/react-unicons"
import { navigate } from "gatsby"
export const HeaderC = () => {
  const { loginWithRedirect } = useAuth0()
  const [Auth, setAuth] = useState(false)

  return (
    <div className="header">
      <div className="header_head">
        <div className="header_title">Bienvenido</div>
        <InputComponent />
      </div>
      <div className="header_options">
        {Auth ? (
          <button onClick={() => loginWithRedirect()}>login</button>
        ) : (
          <button
            onClick={() => navigate(`/app/cart/`)}
            className="button_log"
          >
            <UilShoppingCartAlt />
          </button>
        )}
      </div>
    </div>
  )
}
