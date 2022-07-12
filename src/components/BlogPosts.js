import {graphql, useStaticQuery, Link} from 'gatsby';
import ReactMarkdown from 'react-markdown';

function BlogPosts(){
  const data = useStaticQuery(graphql`
  query MyQuery2 {
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
return(
  <section className='blog-posts'>
    {
      issues.map((issue)=> {
        const issueExcerpt = issue.node.body.split(' ').splice(0, 40).join(' ');
        const date = new Date(issue.node.createdAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
        const issueTitle = issue.node.title.slice(0, 5)
        return(
          <div className='blog-list-post'>
            <Link to={issueTitle} style={{"textDecoration": "none"}}>
              <h2 className='blog-list-title'>{issue.node.title}</h2>
            </Link>
            <div className='blog-list-excerpt'>
            <ReactMarkdown>
                {issueExcerpt}
            </ReactMarkdown>
            </div>
            <div className='blog-list-footer'>
              <span className='blog-list-date'> {date}</span>
              <a href={issue.node.url}>
              <img className='footer-logo' src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
              </a>
            </div>
          </div>
        )
      })
    }
  </section>
)
}

export default BlogPosts