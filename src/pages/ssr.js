import React from "react"
import fetch from "node-fetch"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function UsingSsr({ serverData }) {
  return (
    <main>
      <Link to="/">Back</Link>
      <StaticImage
        placeholder="blurred"
        src="../images/ron-swanson.jpeg"
        alt="Ron Swanson"
        class="hero"
        layout="fullWidth"
      />
      <p class="ron-quote">{serverData.quote}</p>
      <p class="info">
        Every time you refresh this page, you'll get a new unaffected quote from
        Ron
      </p>
    </main>
  )
}

export async function getServerData() {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`).then(
    res => res.json()
  )
  data.quote = await fetch(
    `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
  ).then(res => res.json())

  return {
    props: await data,
  }
}

export default UsingSsr
