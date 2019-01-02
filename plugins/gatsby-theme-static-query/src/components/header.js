import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

function Header() {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <h1>{data.site.siteMetadata.title}</h1>
      )}
    />
  )
}

// function Header() {
//   return <h1>Hello World</h1>
// }

export default Header
