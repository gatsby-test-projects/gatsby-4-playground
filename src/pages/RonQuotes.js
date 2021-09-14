import React from "react"
import fetch from "node-fetch"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function RonQuotes({ serverData }) {
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
  return {
    props: {
      quote: await fetch(
        `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
      ).then(res => res.json()),
    },
  }
}

export default RonQuotes
