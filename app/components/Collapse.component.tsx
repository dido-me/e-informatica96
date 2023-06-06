'use client'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { BsFillCircleFill } from 'react-icons/bs'

function Collapse ({
  parentCategory,
  idParedCategory,
  indexCollapse,
  changeCollapse
}: any) {
  const isOpen = indexCollapse === idParedCategory

  const handleCollapse = () => {
    if (isOpen) {
      changeCollapse(0)
    } else {
      changeCollapse(idParedCategory)
    }
  }

  const SUBCATEGORIES = [
    {
      id: 284,
      name: 'Cisco',
      slug: 'cisco'
    },
    {
      id: 222,
      name: 'HP SERVERS',
      slug: 'hp'
    }
  ]

  return (
    <div className='collapse '>
      <input type='checkbox' checked={isOpen} onChange={handleCollapse} />
      <button
        className={`collapse-title  flex justify-between items-center px-10 ${
          isOpen && 'text-[#C18D21]'
        }`}
      >
        <span>{parentCategory}</span>
        {isOpen
          ? (
            <IoMdArrowDropdown size={25} />
            )
          : (
            <IoMdArrowDropup size={25} />
            )}
      </button>
      <ul className='collapse-content ml-6 flex flex-col gap-4'>
        {SUBCATEGORIES.map((subCategory, index) => (
          <li
            key={subCategory.id}
            className='flex items-center justify-between'
          >
            <input
              id={index.toString()}
              className='hidden peer/cat'
              type='radio'
              name={idParedCategory}
            />
            <label htmlFor={index.toString()} className='cursor-pointer'>
              {subCategory.name}
            </label>
            <BsFillCircleFill className='mr-7 text-transparent peer-checked/cat:text-[#C18D21]' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Collapse
