import { ReactNode, InputHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface InputFieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}
export interface InputFieldRootProps {
  children: ReactNode
  hasError?: boolean
}
export interface InputFieldIconProps {
  children: ReactNode
}
function InputFieldRoot({ hasError, children }: InputFieldRootProps) {
  return (
    <div
      className={clsx(
        'flex items-center w-full gap-3 py-4 px-3 max-h-12 bg-gray-800 rounded focus-within:ring-2  ',
        { 'ring-cyan': hasError === false, 'ring-red': hasError === true }
      )}
    >
      {children}
    </div>
  )
}

function InputFieldInput({ type, ...props }: InputFieldInputProps) {
  return (
    <input
      type={type}
      className='bg-transparent flex-1 h-12 justify-center text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
    />
  )
}
function InputFieldIcon({ children }: InputFieldIconProps) {
  return <Slot className='w-6 h-6 text-gray-600'>{children}</Slot>
}

InputFieldIcon.displayName = 'InputField.Icon'
InputFieldRoot.displayName = 'InputField.Root'

export const InputField = {
  Root: InputFieldRoot,
  Input: InputFieldInput,
  Icon: InputFieldIcon
}
