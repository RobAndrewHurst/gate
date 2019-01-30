import React from 'react'
import { graphql } from 'gatsby'
import '../components/index.css'

import SEO from '../components/seo'

import Sidebar from '../components/sidebar'
import Content from '../components/content'

const IndexPage = ({ data: content }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Sidebar content={content} />
    <Content content={content} />
  </>
)

export default IndexPage

export const query = graphql`
  query Content {
    content: markdownRemark {
      frontmatter {
        language_tabs
      }
      headings {
        value
        depth
      }
      htmlAst
    }
  }
`
