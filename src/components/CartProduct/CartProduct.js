import React from "react"

const CartProduct = () => {
  return (
    <div className="cart-product">
      <div className="cart-product-container">
      

          <div className="cart-product-image">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </div>

          <div className="cart-product-data">
            <p className="lead fw-normal mb-2">Basic T-shirt</p>
            <p>
              <span className="text-muted">Size: </span>M{" "}
              <span className="text-muted">Color: </span>Grey
            </p>
          </div>

          <div className="cart-product-quantity">
            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i className="fas fa-minus"></i>
            </button>

            <input
              id="form1"
              min="0"
              name="quantity"
              value="2"
              type="number"
              className="form-control form-control-sm"
            />

            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">$499.00</h5>
          </div>

          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" className="text-danger">
              <i className="fas fa-trash fa-lg"></i>
            </a>
          </div>

      
      </div>
    </div>
  )
}

export default CartProduct
