import React, { TextareaHTMLAttributes, FC, useRef, useEffect } from 'react'

import styles from './textarea.module.scss'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean
  autoFocus?: boolean
}

export const Textarea: FC<Props> = ({ autoFocus, ...props }) => {
  const ref = useRef<HTMLTextAreaElement>(null)

  const { error } = props

  useEffect(() => {
    if (autoFocus && ref && ref.current) {
      ref.current.focus()
    }
  }, [autoFocus])

  const classNames = `${styles.box} ${error ? styles.error : ''}`

  return <textarea {...props} ref={ref} className={classNames} />
}
