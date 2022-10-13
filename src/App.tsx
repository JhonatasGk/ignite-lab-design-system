import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Button } from './components/Button/Button'
import { Checkbox } from './components/Checkbox/Checkbox'
import { Heading } from './components/Heading/Heading'
import { Text } from './components/Text/Text'
import { InputField } from './components/InputField/InputField'
import './styles/global.css'

export function App() {
  const [hasHide, setHasHide] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className='w-screen h-screen flex-col  bg-gray-900 flex items-center justify-center '>
      <header className='flex flex-col items-center justify-center'>
        <Icon
          icon='carbon:logo-react'
          className='text-cyan'
          width={135}
          height={120}
        />
        <Heading size='lg' className='mt-4'>
          Ignite lab
        </Heading>
        <Text size='lg' className='text-gray-600 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        action=''
        onSubmit={e => {
          setIsLoading(true)
          e.preventDefault()
          setTimeout(() => {
            setIsLoading(false)
          }, 3000)
        }}
        className='flex flex-col w-full max-w-sm mt-10  gap-4 items-stretch'
      >
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <InputField.Root>
            <InputField.Icon>
              <Icon icon='mdi:email-outline' />
            </InputField.Icon>
            <InputField.Input
              id='email'
              type='email'
              placeholder='johndoe@example.com'
            />
          </InputField.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3 '>
          <Text className='font-semibold'>Sua senha</Text>
          <InputField.Root>
            <InputField.Icon>
              <Icon icon='mdi:lock-outline' />
            </InputField.Icon>
            <InputField.Input
              id={hasHide ? 'text' : 'password'}
              type={hasHide ? 'text' : 'password'}
              placeholder={hasHide ? 'your password' : '**********'}
            />
            <Button
              state='ghost'
              type='button'
              onClick={() => {
                setHasHide(!hasHide)
              }}
            >
              <InputField.Icon>
                <Icon
                  icon={hasHide ? 'mdi:eye-off-outline' : 'mdi:eye-outline'}
                />
              </InputField.Icon>
            </Button>
          </InputField.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='flex items-center'>
            Lembrar de mim!
          </Text>
        </label>
        <Button
          type='submit'
          state={isLoading ? 'loading' : 'enabled'}
          className='mt-4'
        >
          Entrar
        </Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href='' className='text-gray-600 underline'>
            Esqueceu sua senha ?
          </a>
        </Text>
        <Text asChild size='sm'>
          <a href='' className='text-gray-600 underline'>
            Não possui conta? crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}
