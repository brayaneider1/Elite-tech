import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Commerce from "@chec/commerce.js"
import { ProductCard } from "../ProductCard/ProductCard"
import Layout from "../Layout/Layout"

export default function CategoryPage({
  pageResources: {
    json: { pageContext },
  },
}) {
  const [category, setCategory] = useState({})
  const commerce = new Commerce(
    "pk_test_50010f2f8ded5a64ca30f1916fd8e1ce336c17aa36543"
  )
  useEffect(() => {
    commerce.products
      .list({
        category_id: [pageContext.id],
      })
      .then(product => setCategory(product))
  }, [pageContext.id])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  }
  return (
    <Layout>
      <div className="container-category">
        <h2>{pageContext?.name}</h2>
        <motion.div
          style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          className="container-category"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {category?.data?.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </motion.div>
      </div>
    </Layout>
  )
}
