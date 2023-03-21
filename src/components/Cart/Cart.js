import React, { useEffect, useState } from "react"
import CartProduct from "../CartProduct/CartProduct"
import Commerce from "@chec/commerce.js"
import img from "../../imgs/shopping-gdf9022597_1280.png"
const Cart = () => {
  const [productInCart, setProductInCart] = useState([])
  const commerce = new Commerce(
    "pk_test_50010f2f8ded5a64ca30f1916fd8e1ce336c17aa36543"
  )
  useEffect(() => {
    commerce.cart.contents().then(items => setProductInCart(items))
  }, [])
  console.log(productInCart)

  return (
    <section className="cart">
      <div className="cart-title">
        <h2>Carrito De Compras</h2>
      </div>
      <div className="cart-container">
        <div className="cart-container-product">
          {productInCart.map((item, i) => (
            <CartProduct item={item} key={i} />
          ))}
          <div className="cart-subtotal">
            <a>Total: </a>
            <span>$43.953</span>
          </div>
        </div>
        <div className="cart-container-checkout">
          <div className="data-container">
            <h2>Resumen De Compra</h2>
            <div className="data-container-image">
              <img src={img} />
            </div>
            <div>
              <h3>Order #1021</h3>
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
                <strong>$199.99</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
