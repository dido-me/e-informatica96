import { ButtonHTMLAttributes, ComponentType, FC } from 'react'

interface ButtonMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: ComponentType<{ className: string }>
    text: string
  }

export const ButtonMenu: FC<ButtonMenuProps> = ({ Icon, text, ...props }) => {
  const words = text.split(' ')
  return (
    <button {...props}>
      <Icon className='text-2xl xl:text-4xl' />
      <div className='flex flex-col '>
        {words.map((word, index) => (
          <span key={index} className='text-[0.6rem] xl:text-sm'>{word}</span>
        ))}
      </div>
    </button>
  )
}
