import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { Icon } from '@iconify/react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  className?: string
  state: 'enabled' | 'disabled' | 'loading' | 'ghost'
}

export function Button({
  children,
  asChild,
  state,
  className,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      aria-label='button'
      className={clsx(
        ' flex flex-col items-center justify-items-center text-center  rounded  transition-colors  ring-white outline-none',
        {
          'py-3 px-4 font-semibold text-sm w-full bg-cyan hover:bg-cyan-400 focus:ring-2 text-black':
            state === 'enabled',
          'py-3 px-4 font-semibold text-sm w-full bg-cyan-700 text-black text-opacity-70  pointer-events-none ':
            state === 'disabled',
          'bg-cyan hover:bg-cyan-100 py-3 px-4 w-full pointer-events-none':
            state === 'loading',
          'text-gray-200 ': state === 'ghost'
        },
        className
      )}
      {...rest}
    >
      {state === 'loading' ? (
        <Icon icon='line-md:loading-twotone-loop' width='24' height='24' />
      ) : (
        children
      )}
    </Comp>
  )
}
