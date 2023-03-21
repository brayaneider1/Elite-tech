import React from "react"

const CartProduct = ({ item }) => {
  const {
    product_name,
    image: { url },
    price: { raw },
    quantity,
  } = item

  const formatNumber = num => {
    let priceT = raw * quantity
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "COP",
    })
      .format(priceT)
      .replace(",00", "")
      .replace("COP", "")
  }

  return (
    <div className="cart-product">
      <div className="cart-product-container">
        <div className="cart-product-image">
          <img src={url} className="img-fluid rounded-3" alt="Cotton T-shirt" />
        </div>

        <div className="cart-product-data">
          <p className="lead fw-normal mb-2">{product_name}</p>
          <p>
            <span className="text-muted">Size: </span>M{" "}
            <span className="text-muted">Color: </span>Grey
          </p>
        </div>

        <div className="cart-product-quantity">
          <button
            className="btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
          >
            <i className="fas fa-minus"></i>
          </button>

          <input
            id="form1"
            min="0"
            name="quantity"
            value={quantity}
            type="number"
            className="form-control form-control-sm"
          />

          <button
            className="btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="cart-product-quantity">
          <h5 className="mb-0">${formatNumber(raw)}</h5>
        </div>

        <div className="cart-product-delete">
          <a href="#!" className="text-danger">
            <i className="fas fa-trash fa-lg" style={{ color: "#05F29B" }}></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
