import React from "react"
import fetch from "node-fetch"
import { StaticImage } from "gatsby-plugin-image"

function UsingSsr({ serverData }) {
  return (
    <main>
      <StaticImage
        placeholder="blurred"
        src="../images/ron-swanson.jpeg"
        alt="Ron Swanson"
        class="hero"
        layout="fullWidth"
      />
      <p class="ron-quote">{serverData.quote}</p>
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
    props: data,
  }
}

export default UsingSsr
