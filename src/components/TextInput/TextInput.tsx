import { ReactNode, InputHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextInputRootProps {
  children: ReactNode
}
export interface TextInputIconProps {
  children: ReactNode
}
function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='flex items-center w-full gap-3 py-4 px-3 max-h-12 bg-gray-800 rounded focus-within:ring-2 ring-cyan '>
      {children}
    </div>
  )
}

function TextInputInput({ ...props }: TextInputInputProps) {
  return (
    <input
      className='bg-transparent flex-1 h-12 justify-center text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
    />
  )
}
function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className='w-6 h-6 text-gray-600'>{children}</Slot>
}

TextInputIcon.displayName = 'TextInput.Icon'
TextInputRoot.displayName = 'TextInput.Root'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
