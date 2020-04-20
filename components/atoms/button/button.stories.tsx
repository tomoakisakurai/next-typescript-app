import { action } from '@storybook/addon-actions'
import * as React from 'react'
import { BaseButton, BaseButtonAnchor } from './button'
import { PrimaryButton } from './primaryButton'

export default {
  title: 'Button',
  component: BaseButton,
}

export const Buttons = () => (
  <>
    {/* <BaseButton prefix={'prefix'} className={'primay-button'} size={'s'} />
    <BaseButton
      prefix={'prefix'}
      className={'primay-button'}
      onClick={action('click')}
    />
    <BaseButton suffix={'suffix'} />
    <BaseButtonAnchor className={'anchor-button'} prefix /> */}
    <PrimaryButton>
      <span>テキスト</span>
    </PrimaryButton>
  </>
)
