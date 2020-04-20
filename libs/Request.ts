import fetch from 'node-fetch'
import { baseSetting } from '../constants'

export class Request<Q, T> {
  #params?: Q
  #init?: RequestInit

  constructor(params?: Q, init?: RequestInit) {
    this.#params = params
    this.#init = init
  }

  // API のドメイン
  private domain = (): string => {
    return baseSetting.domain
  }

  // 各API のパス
  protected getPath = () => {
    return ''
  }

  // リクエスト情報(method, header, etc)
  private getInit = () => {
    return this.#init ?? {}
  }

  private getParam = (): URLSearchParams => {
    const params = this.#params ?? {}
    const qs = new URLSearchParams(params)
    return qs
  }

  public call = (): Promise<T> => {
    return new Promise((resolve, reject) => {
      fetch(
        `${this.domain()}/${this.getPath()}?${this.getParam()}`,
        this.getInit()
      )
        .then((response: Response) => {
          if (response.ok) {
            response
              .json()
              .then((json) => {
                // jsonが取得できた場合だけresolve
                resolve(json)
              })
              .catch((error) => {
                reject(error)
              })
          } else {
            reject(response)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // const wrap = ...

  // call = <T>(): Promise<T> => {
  //   return this.wrap<T>(`${this.getPath()}`)
  // }
}

export default Request
