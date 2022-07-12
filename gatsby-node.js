const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  query MyQuery {
    githubData {
      data {
        repository {
          issues {
            edges {
              node {
                body
                bodyText
                createdAt
                title
                url
              }
            }
          }
        }
      }
    }
  }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.githubData.data.repository.issues.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `blog/${edge.node.title.slice(0, 5)}`,
        component: blogPostTemplate,
        context: {
          title: edge.node.title,
          body: edge.node.body, 
          createdAt: edge.node.createdAt,
          url: edge.node.url
        },
      })
    })
  })
}
