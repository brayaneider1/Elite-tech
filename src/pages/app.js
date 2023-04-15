import * as React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Layout from "../components/Layout/Layout"
import Cart from "../components/Cart/Cart"
import ProductPage from "../components/ProductPages/ProductPage"
import CategoryPage from "../components/CategoryPages/CategoryPage"

const App = () => (
  <Layout>
    <Router basepath="/app" style={{ width: "100%" }}>
      <Cart path="/cart" />
      <ProductPage path="/product/:id" />
      <CategoryPage path="/category/:name/:id"/>
    </Router>
  </Layout>
)

export default App
