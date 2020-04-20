import React, { InputHTMLAttributes, FC, useRef, useEffect } from 'react'

import style from './input.module.scss'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  type?:
    | 'text'
    | 'search'
    | 'tel'
    | 'url'
    | 'email'
    | 'password'
    | 'datetime'
    | 'date'
    | 'month'
    | 'week'
    | 'time'
    | 'datetime-local'
    | 'number'
  error?: boolean
  width?: number | string
  autoFocus?: boolean
}

export const Input: FC<Props> = ({ ...props }) => {
  const ref = useRef<HTMLInputElement>(null)

  const autoFocus = props.autoFocus

  useEffect(() => {
    if (autoFocus && ref && ref.current) {
      ref.current.focus()
    }
  }, [autoFocus])

  return <input className={style.text} {...props} ref={ref} />
}
