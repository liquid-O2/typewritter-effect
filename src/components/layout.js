import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/site.scss"
import Nav from "./nav"

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
      <Nav/>
      <main className="h-100vh">{children}</main>
    </>
  )
}

export default Layout
