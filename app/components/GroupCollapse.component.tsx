'use client'
import withResultCategories from '@mocks/with-results-categories.json'
import { Collapse } from '@app/components'
import { useState } from 'react'

function GroupCollapse () {
  const [indexCollapse, setIndexCollapse] = useState(0)

  return (
    <div className='w-[35rem] dark:bg-[#0C1F34] dark:shadow-[#1a2332] bg-zinc-100 rounded-tr-lg'>
      {withResultCategories.map((category) => {
        if (category.id === 15) return null
        return (
          <Collapse
            key={category.id}
            parentCategory={category.name}
            idParedCategory={category.id}
            indexCollapse={indexCollapse}
            changeCollapse={setIndexCollapse}
          />
        )
      })}
    </div>
  )
}

export default GroupCollapse
