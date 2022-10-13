import { Icon } from '@iconify/react'
import { Button } from './components/Button/Button'
import { Checkbox } from './components/Checkbox/Checkbox'
import { Heading } from './components/Heading/Heading'
import { Text } from './components/Text/Text'
import { TextInput } from './components/TextInput/TextInput'
import './styles/global.css'

export function App() {
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
        className='flex flex-col w-full max-w-sm mt-10  gap-4 items-stretch'
      >
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Icon icon='mdi:email-outline' />
            </TextInput.Icon>
            <TextInput.Input
              id='email'
              type='email'
              placeholder='johndoe@example.com'
            />
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3 '>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Icon icon='mdi:lock-outline' />
            </TextInput.Icon>
            <TextInput.Input
              id='password'
              type='password'
              placeholder='***********'
            />
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='flex items-center'>
            Lembrar de mim!
          </Text>
        </label>
        <Button type='submit' state='enabled' className='mt-4 '>
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
