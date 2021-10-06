import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

require("isomorphic-fetch")

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
      <p>{serverData.random}</p>
    </main>
  )
}

export async function getServerData() {
  throw new Error(
    "forcing an error to make sure telemetry is logging SSR errors!"
  )
  return {
    props: {
      quote: await fetch(
        `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
      ).then(res => res.json()),
      random: Math.random(),
    },
  }
}

export default RonQuotes
