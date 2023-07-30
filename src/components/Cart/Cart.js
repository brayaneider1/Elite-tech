import React, { useEffect, useState } from "react"
import CartProduct from "../CartProduct/CartProduct"
import Commerce from "@chec/commerce.js"
import CartCheckout from "../CartCheckout/CartCheckout"
import Pay from "../Pay/Pay"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import { Drawer } from "antd"
import Typography from "@mui/material/Typography"
import { HeaderC } from "../Header/Header"
import { FormCheckout } from "../FormCheckout/FormCheckout"
import LottieEmpy from "../../common/Lotties/empty.json"
import Lottie from "lottie-react"

const style = {
  position: "absolute",
  top: "20%",
  right: "0",
  height: "90%",
  borderRadius: "10px",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "rgba(255, 255, 255, 0.2)",
  bpFilter: "blur(50px)",
  bgcolor: "#1E2F82",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const Cart = () => {
  const [open, setOpen] = React.useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleClose = () => setOpen(false)

  const [productInCart, setProductInCart] = useState([])
  const [updateCart, setUpdateCart] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const [cart, setCart] = useState({})

  const commerce = new Commerce(
    "pk_test_51875911a995a6bd1faee1b9b71f652fccac0c6474a16"
  )

  useEffect(() => {
    commerce.cart.contents().then(items => setProductInCart(items))
    commerce.cart.retrieve().then(cart => {
      setCart(cart)
    })
  }, [updateCart])

  const Delete = id => {
    commerce.cart.remove(id).then(response => {
      setUpdateCart(!updateCart)
    })
  }

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  return (
    <div className="cart-c">
      <div className="container-cart">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Metodos de pago
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>

        <Drawer
          title="Completar compra"
          placement="right"
          onClose={handleDrawer}
          open={openDrawer}
        >
          <FormCheckout cart={cart} />
        </Drawer>
        <section className="cart">
          <div className="cart-title">
            <h2>Carrito De Compras</h2>
          </div>
          <div className="cart-container">
            {Array.isArray(productInCart) && productInCart.length > 0 ? (
              <>
                {checkout === false ? (
                  <div className="cart-container-product">
                    {productInCart.map((item, i) => (
                      <CartProduct item={item} key={i} deleteProduct={Delete} />
                    ))}
                  </div>
                ) : (
                  <Pay setCheckout={setCheckout} />
                )}
                <CartCheckout cart={cart} setCheckout={handleDrawer} />
              </>
            ) : (
              <div className="empty-cart-message">
                <Lottie
            className="content-lottie"
            animationData={LottieEmpy}
            loop={true}
          />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Cart
