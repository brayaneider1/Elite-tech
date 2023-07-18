import React from "react"
import "../sass/pages/productos.scss"
import Layout from "../components/Layout/Layout"
import { HeaderC } from "../components/Header/Header"

const IndexPage = () => (
  <Layout>
    <HeaderC />
    <div className="market">
      <h1>Productos</h1>
      <div className="flex-container">
        <span className="count">Contador</span>
        <button className="button">
          <div className="button-inner">
            <span className="button-label">Botón</span>
            <img src="icon.png" alt="Icono" className="button-icon" />
          </div>
        </button>
      </div>
      <div className="dropdown">
        <a href="#" className="dropdown-item">
          Opción 1
        </a>
        <a href="#" className="dropdown-item">
          Opción 2
        </a>
        <a href="#" className="dropdown-item">
          Opción 3
        </a>
      </div>
      <div className="product-grid">
        <div className="product-tile">
          <div className="product-info">
            <h2 className="product-name">Nombre del producto</h2>
            <div className="product-store">
              <span className="product-store-label">Tienda:</span>
              <span className="product-store-name">Nombre de la tienda</span>
            </div>
          </div>
          <div className="product-price">Precio</div>
        </div>

        <div className="product-tile">
          <div className="product-info">
            <h2 className="product-name">Nombre del producto</h2>
            <div className="product-store">
              <span className="product-store-label">Tienda:</span>
              <span className="product-store-name">Nombre de la tienda</span>
            </div>
          </div>
          <div className="product-price">Precio</div>
        </div>

        <div className="product-tile">
          <div className="product-info">
            <h2 className="product-name">Nombre del producto</h2>
            <div className="product-store">
              <span className="product-store-label">Tienda:</span>
              <span className="product-store-name">Nombre de la tienda</span>
            </div>
          </div>
          <div className="product-price">Precio</div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
