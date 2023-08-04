'use client'

import { useCart } from '@src/hooks'
import {
  ButtonHTMLAttributes,
  ComponentType,
  FC,
  useEffect,
  useState
} from 'react'

interface ButtonMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ComponentType<{ className: string }>
  text: string
}

export const ButtonCart: FC<ButtonMenuProps> = ({ Icon, text, ...props }) => {
  const [isClient, setIsClient] = useState(false)

  const { cart } = useCart()
  const words = text.split(' ')

  useEffect(() => {
    setIsClient(cart.length > 0)
  }, [cart.length])

  return (
    <button {...props}>
      <div className='relative'>
        <Icon className='text-2xl xl:text-4xl' />
        {isClient && (
          <span className='absolute top-[-4px] right-0 p-1 bg-inf-quaternary text-inf-primary rounded-full'>
            {cart.length}
          </span>
        )}
      </div>
      <div className='flex flex-col '>
        {words.map((word, index) => (
          <span key={index} className='text-[0.6rem] xl:text-sm'>
            {word}
          </span>
        ))}
      </div>
    </button>
  )
}
