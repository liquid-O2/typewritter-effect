import * as React from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import "../sass/site.scss"
import Nav from "./nav"

const Layout = ({ children }) => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    const curtain = document.querySelector(".curtain")
    curtain.classList.add("fade-in")
    const links = document.querySelectorAll("a")
    links.forEach(link => {
      link.getAttribute("target") === null &&
        link.addEventListener("click", function fadeAnimation(e) {
          e.preventDefault()
          const url = link.getAttribute("href")
          url !== pathname && curtain.classList.add("fade-out")
          setTimeout(() => {
            navigate(url)
          }, 700)
        })
    })
  }, [pathname])

  return (
    <>
      <Nav />
      <main className='h-100vh curtain'>{children}</main>
    </>
  )
}

export default Layout
