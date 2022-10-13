import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@iconify/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Label',
    state: 'enabled'
  },
  argTypes: {
    children: { name: 'Label' },
    state: {
      options: ['disabled', 'enabled', 'loading', 'ghost'],
      control: { type: 'inline-radio' }
    },
    asChild: {
      table: {
        disable: true
      }
    },
    className: {
      table: { disable: true }
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    state: 'disabled'
  }
}
export const Loading: StoryObj<ButtonProps> = {
  args: {
    state: 'loading'
  }
}
export const Ghost: StoryObj<ButtonProps> = {
  args: {
    state: 'ghost'
  }
}
