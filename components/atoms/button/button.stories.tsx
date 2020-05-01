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
    <ul>
      <li>
        <PrimaryButton>
          <span>テキスト</span>
        </PrimaryButton>
      </li>
      <li>
        <PrimaryButton className={'button2'}>
          <span>テキスト2</span>
        </PrimaryButton>
      </li>
    </ul>

    <style jsx>{`
      ul {
        list-style: none;
      }
      li {
        margin-bottom: 0.5rem;
      }
    `}</style>
  </>
)
