import React, { ReactElement, useState } from 'react'
import Head from 'next/head'
import Nav from '../../../components/nav'

import { ArticleApi } from '../../../api/articleApi'

import { PrimaryButton } from '../../../components/atoms/button/primaryButton'
import { Textarea } from '../../../components/atoms/textarea/textarea'
import { GetServerSideProps } from 'next'
import { ArticleResponse } from '../../../entities/article'
import { ArticlePostApi } from '../../../api/articlePostApi'

interface Props {
  article: ArticleResponse
}

const Article = ({ article }: Props) => {
  const [articleData, setArticleData] = useState<ArticleResponse>(article)

  console.log(articleData)

  // TODO: 管理者フラグ
  const [isAdmin, setAdmin] = useState(false)

  const [title, setTitle] = useState(articleData.title)

  const clickPost = async () => {
    const result = window.confirm(
      `【Demo:】 イベント(id=${article.article_id})を更新しても良いですか？`
    )
    if (result) console.log('更新しました')
    console.log(articleData)
    setArticleData(articleData)

    await new ArticlePostApi(undefined, {
      method: 'POST',
      body: JSON.stringify(articleData),
    })
      .call()
      .then((res) => {
        console.log(res)
      })

    // TODO: 以下、更新処理を追加する
    // dispatch({ type: DELETE_ARTICLE, payload: { id: item.article_id } })
  }

  const changeText = (text) => {
    articleData.title = text
    setArticleData(Object.assign({}, articleData))
  }

  const textAreaStyle = {
    width: '480px',
  }

  return (
    <div>
      <Nav />

      <div className="edit-area">
        <ul>
          <li>
            <h3>タイトル・リード文</h3>
            <dl>
              <dt className="item-title">タイトル</dt>
              <dd className="item-contents">
                <Textarea
                  maxLength={50}
                  defaultValue={articleData.title}
                  style={textAreaStyle}
                  onChange={(e) => {
                    changeText(e.target.value)
                  }}
                />
                <p className={'letter-count'}>
                  {articleData.title.length}/50文字
                </p>
              </dd>
              <dt className="item-title">リード</dt>
              <dd className="item-contents">
                <Textarea
                  maxLength={200}
                  defaultValue={article.read_text}
                  style={textAreaStyle}
                />
              </dd>
              <dt className="item-title">要約</dt>
              <dd className="item-contents">
                <Textarea
                  maxLength={90}
                  defaultValue={article.summary_text}
                  style={textAreaStyle}
                />
              </dd>
            </dl>
          </li>
          <li>
            <h3>大見出しタイトル</h3>
            <dl>
              <dt className="item-title">大見出しタイトル</dt>
              <dd className="item-contents">
                <Textarea defaultValue={article.title} style={textAreaStyle} />
              </dd>
              <dt className="item-title">本文</dt>
              <dd className="item-contents">
                <Textarea
                  defaultValue={article.read_text}
                  style={textAreaStyle}
                />
              </dd>
            </dl>
          </li>
        </ul>
      </div>

      <PrimaryButton onClick={() => clickPost()}>更新</PrimaryButton>

      <p>保存したデータ↓</p>
      <p>{articleData.title}</p>

      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .item-title {
          width: 180px;
          float: left;
          margin: 0;
        }
        .edit-area {
          width: 700px;
          margin: auto;
        }
        .letter-count {
          text-align: right;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const article = await new ArticleApi({
    id: query.id ?? '',
  }).call()
  return {
    props: {
      article,
    },
  }
}

export default Article
