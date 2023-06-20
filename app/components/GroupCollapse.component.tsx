'use client'

import { useState } from 'react'
import Collapse from './Collapse.component'
import { ParentCategory } from '@src/models/category'

export default function GroupCollapse ({
  categories
}: {
  categories: ParentCategory[]
}) {
  const [indexCollapse, setIndexCollapse] = useState(0)

  return (
    <>
      {categories && categories.map((category: ParentCategory) => {
        if (category.id === 15) return null
        return (
          <Collapse
            key={category.id}
            category={category}
            changeCollapse={setIndexCollapse}
            cheked={indexCollapse === category.id}
          />
        )
      })}
    </>
  )
}
