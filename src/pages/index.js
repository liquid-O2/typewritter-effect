import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  // -- Using JS
  useEffect(() => {
    // -- Typewriter effect for onView event.
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

    // -- Typewriter effect for onHover event
    const parentElements = document.querySelectorAll(".typewriter-parent")
    parentElements.forEach(element => {
      element.addEventListener("mouseenter", () => {
        const caption = element.querySelector(".typewriter-caption")
        if (!caption) return
        const text = caption.innerHTML
        caption.innerHTML = ""
        let index = 0
        caption.classList.remove("end")
        caption.classList.add("start")
        function typeWriter() {
          if (index < text.length) {
            caption.innerHTML += text.charAt(index)
            index++
            setTimeout(typeWriter, 50)
          }
        }
        typeWriter()
      })
      element.addEventListener("mouseleave", () => {
        const caption = element.querySelector(".typewriter-caption")
        if (!caption) return
        caption.classList.remove("start")
        caption.classList.add("end")
      })
    })
  }, [])

  return (
    <Layout>
      <article>
        <h1>Typewriter Demo</h1>
      </article>
      <section className='card-wrapper'>
        <figure className='typewriter-parent'>
          <StaticImage src='../images/imageOne.jpg' alt='Image One' quality={80} placeholder='blurred' />
          <figcaption className='typewriter-wrapper'>
            <p className='typewriter marker' data-sal>
              CASA BLANCA
            </p>
            <p className='typewriter-caption'>TIMELESS ELEGANCE AWAITS</p>
          </figcaption>
        </figure>
        <figure className='typewriter-parent'>
          <StaticImage src='../images/imageTwo.jpg' alt='Image Two' quality={80} placeholder='blurred' />
          <figcaption className='typewriter-wrapper'>
            <p className='typewriter marker' data-sal>
              SCANDANAVIAN DELIGHT
            </p>
            <p className='typewriter-caption'>YOUR NORDIC RETREAT</p>
          </figcaption>
        </figure>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title='Home' />

IndexPage.Layout = Layout
export default IndexPage
