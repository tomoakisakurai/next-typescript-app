import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      {/* <h1 className="title">{article.data.title}</h1>
      <p className="description">{article.data.read_text}</p> */}
    </div>
  </div>
)

export default Home
