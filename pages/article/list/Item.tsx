import React, { ReactElement, useState, useContext } from 'react'
import moment from 'moment'

import style from './index.module.scss'

import { ArticleListEntity } from '../../../entities/article/list'
import AppContext from '../../../contexts/AppContext'
import { DELETE_ARTICLE } from '../../../actions'

interface Props {
  item: ArticleListEntity
}

const Item = (props: Props): ReactElement => {
  const item = props.item
  const { dispatch } = useContext(AppContext)

  const deleteArticle = () => {
    const result = window.confirm(
      `【Demo:】 イベント(id=${item.article_id})を本当に削除しても良いですか？`
    )
    if (result)
      dispatch({ type: DELETE_ARTICLE, payload: { id: item.article_id } })
  }

  return (
    <li className={style.list_item}>
      <ul className={style.list}>
        <li className={style.title}>{item.article_id}</li>
        <li className={style.title}>{item.pref_jp}</li>
        <li className={style.title}>{item.title}</li>
        <li className={style.title}>{item.navigator_no}</li>
        <li className={style.title}>{item.user_name}</li>
        <li>{moment(item.rec_date).format('YYYY/MM/DD HH:mm:ss')}</li>
        <li>
          {moment(item.first_approval_date).format('YYYY/MM/DD HH:mm:ss')}
        </li>
        <li>{moment(item.approval_date).format('YYYY/MM/DD HH:mm:ss')}</li>
        <li>
          <button>
            <a href={`/article/editor?id=${item.article_id}`}>編集</a>
          </button>
        </li>
        <li>
          <button onClick={deleteArticle}>削除</button>
        </li>
      </ul>
    </li>
  )
}

export default Item
