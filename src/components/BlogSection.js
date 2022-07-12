import {graphql, useStaticQuery, Link} from 'gatsby';
import ReactMarkdown from 'react-markdown';

function BlogSection(){
  const data = useStaticQuery(graphql`
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
  }`)
  const issues = data.githubData.data.repository.issues.edges;
  console.log(issues)
  return(
    <section className='blog-section'>
      <h3 className='section-title'>Blogs</h3>
      <div className='blog-section-entries'>
      {issues.map((issue)=> {
        const issueExcerpt = issue.node.body.slice(0, 80)
        return(
          <div className="blog-section-entry">
            <Link to={`blog/${issue.node.title.slice(0, 5)}`} style={{"textDecoration": "none"}}>
              <h2>{issue.node.title}</h2>
              <ReactMarkdown>
                {issueExcerpt}
              </ReactMarkdown>
            </Link>
          </div>
        )
      })}
      </div>
    </section>
  )
}

export default BlogSection
