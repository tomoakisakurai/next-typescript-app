import { action } from '@storybook/addon-actions'
import * as React from 'react'
import { Textarea } from './textarea'

export default {
  title: 'Textarea',
  component: Textarea,
}

export const All = () => (
  <ul>
    <li>
      <p>normal</p>
      <Textarea />
    </li>
    <li>
      <p>width(width: 100%)</p>
      <Textarea style={{ width: '100%' }} />
    </li>
    <li>
      <p>defaultValue(width: 50%)</p>
      <Textarea
        defaultValue={'これはデフォルトばりゅー'}
        style={{ width: '50%' }}
      />
    </li>
    <li>
      <p>autoFocus</p>
      <Textarea autoFocus />
    </li>
    <li>
      <p>disabled</p>
      <Textarea disabled />
    </li>
    <li>
      <p>error</p>
      <Textarea error />
    </li>
  </ul>
)
