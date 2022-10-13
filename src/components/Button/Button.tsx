import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  className?: string
  state: 'enabled' | 'disabled' | 'loading'
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
      className={clsx(
        'py-3 px-4 flex flex-col items-center justify-items-center text-center  rounded font-semibold text-sm w-full transition-colors  ring-white outline-none',
        {
          'bg-cyan hover:bg-cyan-400 focus:ring-2 text-black ':
            state === 'enabled',
          'bg-cyan bg-opacity-25 text-gray-600 cursor-not-allowed ':
            state === 'disabled',
          'bg-cyan hover:bg-cyan-400 pointer-events-none': state === 'loading'
        },
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}
