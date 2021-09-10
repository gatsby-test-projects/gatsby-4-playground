import React from "react"
import fetch from "isomorphic-fetch"

function UsingSsr({ serverData }) {
  return (
    <main>
      <img src={serverData.message} />
    </main>
  )
}

export async function getServerData() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`)

  return {
    props: await res.json(),
  }
}

export default UsingSsr
