import ReactMarkdown from "react-markdown";
function ProjectEntry({project, index}){
  console.log(project)
  const date = new Date(project.timestamp).toLocaleDateString('en-us', { year:"numeric", month:"short"});
return(
  <div className='project-entry' >
    <div className='project-entry-image'><img className='project-entry-img' src={project.image.childImageSharp.fluid.src}/></div>
    
    <div className='project-entry-text'>
      <div className='project-entry-top'>
        <div className="project-text-title">{project.title}</div>
        <div className="project-text-date">{date}</div>
      </div>
      <div className="project-entry-bottom">
        <ul className="project-text-description">
          {
            project.bullets.map((bullet) => {
              return(
                <li>{bullet}</li>
              )
            })
          }
        </ul>
        <ul className="project-text-techs">
          <li className="project-text-link"><a href={project.github}>Github Repository</a></li>
          <li className="project-text-link"><a href={project.demo}>Demo</a></li>
        </ul>
      </div>
    </div>
  </div>
)

}

export default ProjectEntry