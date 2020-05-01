import React, { ReactElement, useState, useReducer, Reducer } from 'react'
import Head from 'next/head'

import { ArticleListApi } from '../../../api/articleListApi'
import List from './List'
import AppContext from '../../../contexts/AppContext'
import reducer, { State, Action } from '../../../reducers'

const ArticleList = ({ data }) => {
  const initialState: State = { articleList: data }
  const [txt, setTxt] = useState('')
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  )
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <Head>
          <title>Homeです。</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="hero">
          <input value={txt} onChange={(e) => setTxt(e.target.value)} />
          <p>入力中の文字です：{txt}</p>
          <List />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export async function getServerSideProps(context) {
  const query = context.query
  const data = await new ArticleListApi(
    {
      category: query.category,
    },
    {
      method: 'get',
    }
  ).call()

  return {
    props: {
      data,
    },
  }
}

export default ArticleList
