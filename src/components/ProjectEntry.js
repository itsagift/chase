import ReactMarkdown from "react-markdown";
function ProjectEntry({project, index}){
  console.log(project)
  const date = new Date(project.timestamp).toLocaleDateString('en-us', { year:"numeric", month:"short"});
return(
  <div className='project-entry' style={{
    flexDirection: index % 2 === 0 ? 'row-reverse' : undefined,
  }}>
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
        {
          project.technologies.map((technology)=> {
            return(
              <li className="project-text-tech">{technology}</li>
            )
          })
        }
        </ul>
      </div>
    </div>
  </div>
)

}

export default ProjectEntry