import React, { ReactElement, useState } from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'

import { ArticleResponse } from '../../entities/article'
import { Button } from '@storybook/react/demo'
import { ArticleApi } from '../../api/articleApi'
import { Input } from '../../components/atoms/input/Input'
import { BaseButton } from '../../components/atoms/button/button'

// import style from './article.module.scss'

// const clickPost = async (txt: string) => {
//   await new ArticleApi(
//     'data',
//     { id: 'aa', navigatorId: 'n123' },
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id: 1, name: txt }),
//     }
//   ).call()
// }

const Home = ({ article }) => {
  const [txt, setTxt] = useState('')

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        {/* <h1 className="title">{article.name}</h1> */}
        <h1 className={style.text}>{article.name}</h1>
        <p className="description">{article.read_text}</p>
        <input value={txt} onChange={(e) => setTxt(e.target.value)} />
        <Button onClick={() => clickPost(txt)}>click</Button>
        <BaseButton style={{ width: '550px', backgroundColor: '#000' }} />
        <p>入力中の文字です：{txt}</p>
      </div>
      <Input />
    </div>
  )
}

export async function getServerSideProps({ params, query }) {
  const article = await new ArticleApi(
    {
      id: query.id,
    },
    {
      method: 'get',
    }
  ).call()

  return {
    props: {
      article,
    },
  }
}

export default Home
