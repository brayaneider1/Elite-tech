const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  /* if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`

    createPage(page)
  } */

  createPage({
    ...page,
    matchPath: page.path.match(/^\/app/) ? "/app/*" : undefined,
    path: page.path,
    context: {
      ...page.context,
      locale: "ES",
      lang: "ES",
      dateFormat: "UTF-8",
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await createPagesCategories(createPage, graphql)
  await createPagesProducts(createPage, graphql)
}

const createPagesProducts = (createPage, graphql) => {
  return new Promise((resolve, reject) => {
    const pageProduct = path.resolve(
      "./src/components/ProductPages/ProductPage.js"
    )
    resolve(
      graphql(`
        {
          allChecProduct {
            edges {
              node {
                active
                categories {
                  id
                  name
                  description
                  products {
                    name
                    image {
                      url
                    }
                    description
                    permalink
                    price {
                      formatted
                    }
                    id
                  }
                }
                created
                description
                id

                image {
                  id
                  url
                }
                name
                permalink
                price {
                  raw
                }
                sku
                inventory {
                  available
                }
                images {
                  id
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const products = result.data?.allChecProduct.edges
        products.forEach(article => {
          createPage({
            path: `/product/${article.node.id}/`,
            component: pageProduct,
            context: { ...article.node },
          })
        })
      })
    )
  })
}

const createPagesCategories = (createPage, graphql) => {
  return new Promise((resolve, reject) => {
    const pageCategory = path.resolve(
      "./src/components/CategoryPages/CategoryPage.js"
    )
    resolve(
      graphql(`
        {
          allChecCategory {
            edges {
              node {
                id
                name
                description
                products {
                  name
                  id
                  image {
                    url
                  }
                  description
                  price {
                    formatted
                  }
                }
                assets {
                  url
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const categories = result.data?.allChecCategory.edges
        categories.forEach(category => {
          createPage({
            path: `/category/${category.node.id}/`,
            component: pageCategory,
            context: { ...category.node },
          })
        })
      })
    )
  })
}
