import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Page from "../components/Page"
import ProjectSection from "../components/ProjectSection"
import BlogSection from "../components/BlogSection"
import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"

// markup
const IndexPage = () => {
  
  return (
    <Page>
      <Hero/>
      <AboutSection/>
      <ProjectSection/>
      <BlogSection/>
    </Page>
  )
}



export default IndexPage
