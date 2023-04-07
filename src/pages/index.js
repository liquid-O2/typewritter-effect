import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".marker")
    elements.forEach(element => {
      element.addEventListener("sal:in", ({ detail }) => {
        detail.target.classList.add("typewriter")
        detail.target.classList.add("typewriter-start")
      })
      element.addEventListener("sal:out", ({ detail }) => {
        detail.target.classList.remove("typewriter")
        detail.target.classList.remove("typewriter-start")
      })
    })
  }, [])

  return (
    <Layout>
      <article>
        <h1>Typewriter Demo</h1>
      </article>
      <section className='card-wrapper'>
        <figure>
          <StaticImage src='../images/imageOne.jpg' alt='Image One' quality={80} placeholder='blurred' />
          <p className='typewriter marker' data-sal>
            Casa Blanca
          </p>
        </figure>
        <figure>
          <StaticImage src='../images/imageTwo.jpg' alt='Image Two' quality={80} placeholder='blurred' />
          <p className='typewriter marker' data-sal>
            Scandanavian Delight
          </p>
        </figure>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title='Home' />

export default IndexPage
