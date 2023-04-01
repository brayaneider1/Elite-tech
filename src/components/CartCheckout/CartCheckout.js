import Commerce from "@chec/commerce.js"
import React, { useEffect, useState } from "react"
import { formatNumber } from "../../common/utils/format"
import img from "../../imgs/shopping-gdf9022597_1280.png"

const CartCheckout = ({ setCheckout }) => {
  const commerce = new Commerce(
    "pk_test_50010f2f8ded5a64ca30f1916fd8e1ce336c17aa36543"
  )
  const [cart, setCart] = useState({})

  useEffect(() => {
    commerce.cart.retrieve().then(cart => {
      setCart(cart)
    })
  }, [])

  return (
    <div className="cart-container-checkout">
      <div className="data-container">
        <div className="data-container-image">
          <img src={img} />
        </div>

        <div className="data-container-order">
          <h2>Resumen</h2>
          <h3> #1021</h3>
        </div>

        <div>
          <div className="data-container-status">
            <div>
              <p>Status: </p>
              <strong>In-progress</strong>
            </div>
            <div>
              <p>Date: </p>
              <strong>1 Oct, 14:34</strong>
            </div>
          </div>
          <div className="data-container-info">
            <p>Subtotal: </p>
            <strong>$19.99</strong>
          </div>
          <div className="data-container-info">
            <p>Envio: </p>
            <strong>$19.99</strong>
          </div>
          <div className="data-container-info">
            <p>Iva: </p>
            <strong>$9.99</strong>
          </div>
          <div className="data-container-info">
            <p>Total: </p>
            <strong>
              ${cart?.subtotal?.raw ? formatNumber(cart?.subtotal?.raw) : "..."}
            </strong>
          </div>
        </div>

        <div className="data-container-button">
          <button onClick={() => setCheckout(true)}>Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default CartCheckout
