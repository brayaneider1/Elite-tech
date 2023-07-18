import React, { lazy, Suspense } from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Layout from "../components/Layout/Layout"
import { Loading } from "../components/Loading/Loading"

const Cart = lazy(() => import("../components/Cart/Cart"))
const ProductPage = lazy(() => import("../components/ProductPages/ProductPage"))
const CategoryPage = lazy(() => import("../components/CategoryPages/CategoryPage"))

const App = () => (
  <Layout>
    <Suspense fallback={<Loading />}>
      <Router basepath="/app" style={{ width: "100%" }}>
        <Cart path="/cart" />
        <ProductPage path="/product/:id" />
        <CategoryPage path="/category/:id" />
      </Router>
    </Suspense>
  </Layout>
)

export default App
