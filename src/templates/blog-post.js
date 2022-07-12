import Page from '../components/Page.js'
import ReactMarkdown from 'react-markdown';

function BlogPostTemplate(props){
  const date = new Date(props.pageContext.createdAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
return(
  <Page>
    <div className='blog-post'>
      <div className='blog-post-header'>{date} // <a href={props.pageContext.url}>View on Github</a></div>
      <h1>{props.pageContext.title}</h1>
      <div className='blog-post-body'>
        <ReactMarkdown>
          {props.pageContext.body}
        </ReactMarkdown>
      </div>
    </div>
  </Page>
)
}

export default BlogPostTemplate