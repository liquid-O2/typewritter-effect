import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/site.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main className="h-100vh">{children}</main>
    </>
  )
}

export default Layout
