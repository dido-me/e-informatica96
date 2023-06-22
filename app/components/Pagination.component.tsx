'use client'

import { useRouter } from 'next/navigation'

function Pagination ({ pages, p }: { pages: number, p: string }) {
  const router = useRouter()
  return (
    <div className='join'>
      {Array.from({ length: pages }, (_, index) => (
        <button
          key={index} className={`join-item btn ${index === parseInt(p) - 1 && 'btn-active'} `}
          onClick={() => router.push(`/?p=${index + 1}`)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination
