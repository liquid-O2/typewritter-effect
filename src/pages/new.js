import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NewPage = () => {
  return (
    <Layout>
      <article>
        <h1>New Page</h1>
      </article>
      <section className='new-image-wrapper'>
        <StaticImage src='../images/imageOne.jpg' alt='Image One' quality={80} placeholder='blurred' />
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title='New' />

export default NewPage
