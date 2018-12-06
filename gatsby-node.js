const path = require('path');
const locales = ['ru', 'en'];

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;

    return new Promise((resolve, reject) => {
        graphql(`
            {
                sections: allSectionsJson {
                    edges {
                        node {
                            name
                        }
                    }
                }
            }
        `)
            .catch(reject)
            .then(result => {
                result.data.sections.edges.forEach(({node}) => {
                    locales.forEach(locale => {
                        createPage({
                            path: `${locale}/${node.name}`,
                            component: path.resolve('./src/templates/section.js'),
                            context: {
                                section: node.name,
                                locale
                            }
                        });

                        createPage({
                            path: `${locale}`,
                            component: path.resolve('./src/templates/index.js'),
                            context: {
                                locale
                            }
                        });

                        createPage({
                            path: `${locale}/about`,
                            component: path.resolve('./src/templates/about.js'),
                            context: {
                                locale
                            }
                        });

                        createPage({
                            path: `${locale}/search`,
                            component: path.resolve('./src/templates/search.js'),
                            context: {
                                locale
                            }
                        });

                        createPage({
                            path: `${locale}/sections`,
                            component: path.resolve('./src/templates/sections.js'),
                            context: {
                                locale
                            }
                        });
                    });
                });

                resolve();
            })
    });
};
