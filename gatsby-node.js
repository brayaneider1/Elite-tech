exports.createPages  = async ({page, actions, graphql }) => {
  const { createPage, deletePage } = actions


  /* if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`

    return createPage(page)
  } */

  const {
    data: { allChecProduct, allChecCategory },
  } = await graphql(`
    {
      allChecProduct {
        nodes {
          id
          permalink
        }
      }

      allChecCategory {
        nodes {
          id
          slug
        }
      }
    }
  `)

  allChecProduct.nodes.forEach(({ id, permalink }) =>
    createPage({
      path: `/products/${permalink}`,
      component: require.resolve(`./src/templatess/ProductPages/ProductPage.js`),
      context: {
        id,
      },
    })
  )

  /* return createPage({
    ...page,
    matchPath: page.path.match(/^\/app/) ? "/app/*" : undefined,
    path: page.path,
    context: {
      ...page.context,
      locale: "ES",
      lang: "ES",
      dateFormat: "UTF-8",
    },
  }) */

  /* return createPage({
        ...page,
        matchPath: page.path.match(/^\/app/) ? '/app/*' : undefined,
        path: newRouter.transform || pathTransform,
        context: {
            ...page.context,
            locale: locales['lang'].locale,
            lang: lang,
            dateFormat: locales[lang].dateFormat,
        },
    }) */
}
