import React, { FC } from 'react'

import { BaseButton, ButtonProps } from './button'

import style from './primaryButton.module.scss'

export const PrimaryButton: FC<ButtonProps> = (props) => {
  return <BaseButton {...props} className={style.primay_button} />
}
