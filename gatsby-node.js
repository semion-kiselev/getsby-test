const path = require('path');

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
                    createPage({
                        path: node.name,
                        component: path.resolve('./src/templates/section.js'),
                        context: {
                            section: node.name
                        }
                    });
                });

                resolve();
            })
    });
};
