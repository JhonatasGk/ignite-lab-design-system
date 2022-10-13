import { clsx } from 'clsx'

import { Icon } from '@iconify/react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
      <CheckboxPrimitive.Indicator asChild>
        <Icon
          icon='mdi:check'
          fontWeight={'bold'}
          className='h-5 w-5 text-cyan'
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
