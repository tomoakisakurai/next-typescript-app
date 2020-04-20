import { action } from '@storybook/addon-actions'
import * as React from 'react'
import { Input } from '../input/Input'

export default {
  title: 'Input',
  component: Input,
}

export const All = () => (
  <ul>
    <li>
      <p>text</p>
      <Input type="text" defaultValue="string" />
    </li>
    <li>
      <p>number</p>
      <Input type="number" defaultValue="1" />
    </li>
    <li>
      <p>password</p>
      <Input type="password" defaultValue="password" />
    </li>
    <li>
      <p>placeholder</p>
      <Input placeholder="string" />
    </li>
    <li>
      <p>width</p>
      <Input defaultValue="width: 100%" width="100%" />
    </li>
    <li>
      <p>onChange</p>
      <Input onChange={action('onChange!!')} />
    </li>
    <li>
      <p>onBlur</p>
      <Input onBlur={action('onBlur!!')} />
    </li>
    <li>
      <p>disabled</p>
      <Input disabled={true} />
    </li>
    <li>
      <p>error</p>
      <Input error={true} />
    </li>
    <li>
      <p>Auto Forcus</p>
      <Input autoFocus />
    </li>
    <style jsx>{`
      ul {
        padding: 0;
      }
      li {
        padding-top: 16px;
      }
    `}</style>
  </ul>
)
