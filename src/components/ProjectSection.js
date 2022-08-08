import { useStaticQuery, graphql } from 'gatsby'
import ProjectEntry from './ProjectEntry'

function ProjectSection(){
  const data = useStaticQuery(graphql`
  query MyTestQuery {
    contentJson {
      projects {
        bullets
        image{
          publicURL
          childImageSharp{
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        github
        technologies
        title
        demo
        timestamp
      }
    }
  }`)
  const projects = data.contentJson.projects
  console.log(projects)
  return(
    <section className='project-section'>
      <h3 className='section-title'>Projects</h3>
      {
        projects.map((project, index)=> {
          return(
            <ProjectEntry project={project} index={index}/>
          )
        })
      }
    </section>
  )
}

export default ProjectSection