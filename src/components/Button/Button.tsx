import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
  children: ReactNode
  asChild: boolean
  state: 'enabled' | 'disabled' | 'loading'
}

export function Button({ children, asChild, state }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'py-4 px-3 flex flex-col items-center justify-items-center text-center  rounded font-semibold text-sm w-full transition-colors  ring-white outline-none',
        {
          'bg-cyan hover:bg-cyan-400 focus:ring-2 text-black ':
            state === 'enabled',
          'bg-cyan-900  text-gray-400 cursor-not-allowed ':
            state === 'disabled',
          'bg-cyan hover:bg-cyan-400 pointer-events-none': state === 'loading'
        }
      )}
    >
      {children}
    </Comp>
  )
}
