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
    state: {
      options: ['disabled', 'enabled', 'loading'],
      control: { type: 'inline-radio' }
    },
    asChild: {
      table: {
        disable: true
      }
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
    children: (
      <Icon icon='line-md:loading-twotone-loop' width='24' height='24' />
    ),
    state: 'loading'
  }
}
