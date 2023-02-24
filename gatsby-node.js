exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions

    deletePage(page)


    if (page.path.match(/^\/app/)) {
        page.matchPath = "/producto/*"

        return createPage(page)
    }

    return createPage({
        ...page,
        matchPath: page.path.match(/^\/app/) ? '/app/*' : undefined,
        path: newRouter.transform || pathTransform,
        context: {
            ...page.context,
            locale: locales['lang'].locale,
            lang: lang,
            dateFormat: locales[lang].dateFormat,
        },
    })

}