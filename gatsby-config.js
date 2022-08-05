require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `Chase Reynolds`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-provide-react`,
    'gatsby-transformer-json',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: process.env.GH_TOKEN,
        graphQLQuery: `
        query($labels: [String!]) {
          repository(owner:"itsagift", name:"chase") {
            issues (last:20, labels: $labels){
              edges {
                node {
                  url
                  title
                  createdAt
                  bodyText
                  body
                }
              }
            }
          }
        }`,
        variables: { "labels": ["state:published", "type:post"] }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Archivo', 'Tenor Sans']
        }
      }
    }
    
  ],
}
