import Link from 'next/link'
import { ComponentType, FC } from 'react'

interface IconLinkProps {
    Icon: ComponentType<{ className: string }>
    text: string
    href: string
    className?: string
  }

export const IconLink: FC<IconLinkProps> = ({
  Icon,
  text,
  href,
  className
}) => {
  const words = text.split(' ')
  return (
    <Link href={href} className={className}>
      <Icon className='text-xl xl:text-4xl' />
      <div className='flex flex-col '>
        {words.map((word, index) => (
          <span key={index} className='text-[0.6rem] xl:text-sm'>{word}</span>
        ))}
      </div>
    </Link>
  )
}
