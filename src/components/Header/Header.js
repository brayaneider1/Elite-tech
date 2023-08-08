import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { UilShoppingCartAlt } from "@iconscout/react-unicons"
import { navigate } from "gatsby"
import { ModalInput } from "../ModalInput/ModalInput"
import { useStaticQuery, graphql } from "gatsby"
import { TfiMenu } from "react-icons/tfi"
import Logo from "../../imgs/LogoW.png"

export const HeaderC = ({handleExpanded}) => {
  const { loginWithRedirect } = useAuth0()
  const [auth, setAuth] = React.useState(false)

  const { allChecProduct } = useStaticQuery(graphql`
    query {
      allChecProduct(sort: { fields: sort_order, order: DESC }) {
        nodes {
          name
          image {
            url
          }
          description
          permalink
          price {
            formatted
          }
          id
        }
      }
    }
  `)

  const products = allChecProduct


  return (
    <div className="header">
      <div className="Logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header_head">
        <ModalInput products={products} key="something-key" />
      </div>
      <div className="header_options">
        {auth ? (
          <button onClick={() => loginWithRedirect()}>login</button>
        ) : (
          <button onClick={() => navigate(`/cart`)} className="button_log">
            <UilShoppingCartAlt />
          </button>
        )}
      </div>
    </div>
  )
}
