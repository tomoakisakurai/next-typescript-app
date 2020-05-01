import React, { ReactElement, useState, useContext } from 'react'

import { ArticleListEntity } from '../../../entities/article/list'
import Item from './Item'
import AppContext from '../../../contexts/AppContext'

const List = (): ReactElement => {
  const context = useContext(AppContext)

  const list = context.state.articleList.map((item: ArticleListEntity) => (
    <Item key={item.article_id} item={item} />
  ))
  return <ul>{list}</ul>
}

export default List
