import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  // -- Using just CSS
  // useEffect(() => {
  //   const elements = document.querySelectorAll(".marker")
  //   elements.forEach(element => {
  //     element.addEventListener("sal:in", ({ detail }) => {
  //       detail.target.classList.add("typewriter")
  //       detail.target.classList.add("typewriter-start")
  //     })
  //     element.addEventListener("sal:out", ({ detail }) => {
  //       detail.target.classList.remove("typewriter")
  //       detail.target.classList.remove("typewriter-start")
  //     })
  //   })
  // }, [])

  // -- Using JS
  useEffect(() => {
    const elements = document.querySelectorAll(".marker")
    elements.forEach(element => {
      element.addEventListener("sal:in", ({ detail }) => {
        const text = element.innerHTML
        element.innerHTML = ""
        let index = 0
        detail.target.classList.remove("end")
        detail.target.classList.add("start")
        function typeWriter() {
          if (index < text.length) {
            detail.target.innerHTML += text.charAt(index)
            index++
            setTimeout(typeWriter, 100)
          }
        }
        typeWriter()
      })
      element.addEventListener("sal:out", ({ detail }) => {
        detail.target.classList.remove("start")
        detail.target.classList.add("end")
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
          <figcaption className='typewriter-wrapper'>
            <p className='typewriter marker' data-sal>
              Casa Blanca
            </p>
          </figcaption>
        </figure>
        <figure>
          <StaticImage src='../images/imageTwo.jpg' alt='Image Two' quality={80} placeholder='blurred' />
          <figcaption className='typewriter-wrapper'>
            <p className='typewriter marker' data-sal>
              Scandanavian Delight
            </p>
          </figcaption>
        </figure>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title='Home' />

export default IndexPage
