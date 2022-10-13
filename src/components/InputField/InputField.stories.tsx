import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@iconify/react'

import { InputField, InputFieldRootProps } from './InputField'

export default {
  title: 'Components/InputField',
  component: InputField.Root,
  args: {
    children: (
      <>
        <InputField.Icon>
          <Icon icon='mdi:email-outline' />
        </InputField.Icon>
        <InputField.Input />
      </>
    ),
    hasError: false
  },
  argTypes: {
    hasError: {
      options: [false, true],
      control: { type: 'boolean' }
    },
    children: {
      name: 'type',
      options: ['email', 'password', 'text'],
      mapping: {
        email: (
          <>
            <InputField.Icon>
              <Icon icon='mdi:email-outline' />
            </InputField.Icon>
            <InputField.Input
              placeholder='Type your e-mail address'
              type={'email'}
            />
          </>
        ),
        password: (
          <>
            <InputField.Icon>
              <Icon icon='mdi:lock-outline' />
            </InputField.Icon>
            <InputField.Input placeholder='************' type='password' />
            <InputField.Icon>
              <Icon icon='mdi:eye-off-outline' />
            </InputField.Icon>
          </>
        ),
        text: (
          <>
            <InputField.Icon>
              <Icon icon='mdi:lock-outline' />
            </InputField.Icon>
            <InputField.Input placeholder='your password' type='text' />
            <InputField.Icon>
              <Icon icon='mdi:eye-outline' />
            </InputField.Icon>
          </>
        )
      }
    }
  }
} as Meta<InputFieldRootProps>

export const Default: StoryObj<InputFieldRootProps> = {}
export const Email: StoryObj<InputFieldRootProps> = {
  args: {
    children: (
      <>
        <InputField.Icon>
          <Icon icon='mdi:email-outline' />
        </InputField.Icon>
        <InputField.Input
          placeholder='Type your e-mail address'
          type={'email'}
        />
      </>
    )
  },
  argTypes: {
    children: {
      table: { disable: true }
    }
  }
}
export const Password: StoryObj<InputFieldRootProps> = {
  args: {
    children: (
      <>
        <InputField.Icon>
          <Icon icon='mdi:lock-outline' />
        </InputField.Icon>
        <InputField.Input placeholder='************' type='password' />
        <InputField.Icon>
          <Icon icon='mdi:eye-outline' />
        </InputField.Icon>
      </>
    )
  },
  argTypes: {
    children: {
      table: { disable: true }
    }
  }
}
export const Text: StoryObj<InputFieldRootProps> = {
  args: {
    children: (
      <>
        <InputField.Icon>
          <Icon icon='mdi:lock-outline' />
        </InputField.Icon>
        <InputField.Input placeholder='your password' type='text' />
        <InputField.Icon>
          <Icon icon='mdi:eye-off-outline' />
        </InputField.Icon>
      </>
    )
  },
  argTypes: {
    children: {
      table: { disable: true }
    }
  }
}
