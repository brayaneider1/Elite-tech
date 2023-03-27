import React, { useEffect, useState } from "react"
import CartProduct from "../CartProduct/CartProduct"
import Commerce from "@chec/commerce.js"
import CartCheckout from "../CartCheckout/CartCheckout"
import Pay from "../Pay/Pay"
const Cart = () => {
  const [productInCart, setProductInCart] = useState([])
  const [updateCart, setUpdateCart] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const commerce = new Commerce(
    "pk_test_50010f2f8ded5a64ca30f1916fd8e1ce336c17aa36543"
  )

  useEffect(() => {
    commerce.cart.contents().then(items => setProductInCart(items))
  }, [updateCart])

  const Delete = id => {
    commerce.cart.remove(id).then(response => {
      setUpdateCart(!updateCart)
    })
  }

  return (
    <div className="container-ovf">
      <section className="cart">
        <div className="cart-title">
          <h2>Carrito De Compras</h2>
        </div>
        <div className="cart-container">
          {checkout === false ? (
            <div className="cart-container-product">
              {productInCart.map((item, i) => (
                <CartProduct item={item} key={i} deleteProduct={Delete} />
              ))}
            </div>
          ) : (
            <Pay setCheckout={setCheckout} />
          )}
          <CartCheckout setCheckout={setCheckout} />
        </div>
      </section>
    </div>
  )
}

export default Cart
