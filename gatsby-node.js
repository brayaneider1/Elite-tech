exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions

    deletePage(page)

/* 
    if (page.path.match(/^\/app/)) {
        page.matchPath = "/agente/*"

        return createPage(page)
    } */

    return createPage({
        ...page,
        matchPath: page.path.match(/^\/app/) ? '/app/*' : undefined,
        path: page.path,
        context: {
            ...page.context,
            locale: 'ES',
            lang: 'ES',
            dateFormat: 'UTF-8',
        },
    })

}