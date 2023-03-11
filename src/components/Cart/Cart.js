import React, { useEffect, useState } from "react"
import CartProduct from "../CartProduct/CartProduct"
import Commerce from "@chec/commerce.js"

const Cart = () => {
  const [productInCart, setProductInCart] = useState([])
  const commerce = new Commerce(
    "pk_test_50010f2f8ded5a64ca30f1916fd8e1ce336c17aa36543"
  )
  useEffect(() => {
    commerce.cart.contents().then(items => setProductInCart(items))
    console.log("🚀 ~ file: Cart.js:7 ~ Cart ~ productInCart:", productInCart)
  }, [])

  return (
    <section className="cart">
      <div class="cart-container-product">
        {productInCart.map(item => (
          <CartProduct item={item}/>
        ))}
        {/* <CartProduct /> */}
      </div>
      <div class="cart-container-checkout">
        <div class="data-container">
          <h2>Datos de Pago</h2>
        </div>
      </div>
    </section>
  )
}

export default Cart
