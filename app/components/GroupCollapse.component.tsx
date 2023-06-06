'use client'
import withResultCategories from '@mocks/with-results-categories.json'
import { Collapse } from '@app/components'
import { useState } from 'react'

function GroupCollapse () {
  const [indexCollapse, setIndexCollapse] = useState(0)

  return (
    <>
      {withResultCategories.map((category) => {
        if (category.id === 15) return null
        return (
          <Collapse
            key={category.id}
            parentCategory={category.name}
            idParedCategory={category.id}
            changeCollapse={setIndexCollapse}
            cheked={indexCollapse === category.id}
          />
        )
      })}
    </>
  )
}

export default GroupCollapse
