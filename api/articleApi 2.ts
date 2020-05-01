import Request from '../libs/Request'
import { ArticleResponse } from '../entities/article'

interface Query {
  id: string
  navigatorId: string
}

class ArticleApi extends Request<Query, ArticleResponse> {
  #path: string

  constructor(path: string, query?: Query, init?: RequestInit) {
    super(query, init)
    this.#path = path
  }

  // 各APIのパス
  protected getPath = (): string => {
    return this.#path
  }
}

export { ArticleApi }
