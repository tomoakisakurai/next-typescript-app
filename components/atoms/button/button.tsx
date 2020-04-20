import React, { FC } from 'react'
// import styled, { css } from 'styled-components'

import style from './button.module.scss'

// import { useTheme, Theme } from '../../hooks/useTheme'
// import { hoverable } from '../../hocs/hoverable'
// import { isTouchDevice } from '../../libs/ua'

type Tag = 'button' | 'a'
type Size = 'default' | 's'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'size' | 'prefix'
> &
  BaseProps
export type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'prefix'
> &
  BaseProps

export type BaseProps = {
  size?: Size
  children?: React.ReactNode
  className?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  square?: boolean
  wide?: boolean
}

export const buttonFactory: <Props extends BaseProps>(tag: Tag) => FC<Props> = (
  tag
) => ({
  size = 'default',
  className = '',
  square = false,
  children = '',
  prefix = '',
  suffix = '',
  ...props
}) => {
  // const theme = useTheme()
  // const Tag = hoverable()(tagStore[tag])
  const Tag = tag
  // prettier-ignore
  const classNames = `${size} ${className} ${square ? 'square' : ''} ${prefix ? 'prefix' : ''} ${suffix ? 'suffix' : ''} ${style.base_button}`

  return (
    <>
      <Tag className={classNames} {...props}>
        {children}
      </Tag>
    </>
  )
}

export const BaseButton: FC<ButtonProps> = buttonFactory<ButtonProps>('button')
export const BaseButtonAnchor: FC<ButtonProps> = buttonFactory<ButtonProps>('a')
