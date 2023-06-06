'use client'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { BsFillCircleFill } from 'react-icons/bs'

function Collapse ({
  parentCategory,
  idParedCategory,
  changeCollapse,
  cheked
}: any) {
  const handleCollapse = () => {
    if (cheked) {
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

  const handleCheked = (e:any) => {
    // console.log(e.target.value)
  }

  return (
    <div className='collapse '>
      <input type='checkbox' checked={cheked} onChange={handleCollapse} />
      <button
        className={`collapse-title  flex justify-between items-center px-10 ${
          cheked && 'text-[#C18D21]'
        }`}
      >
        <span>{parentCategory}</span>
        {cheked
          ? (
            <IoMdArrowDropdown size={25} />
            )
          : (
            <IoMdArrowDropup size={25} />
            )}
      </button>
      <ul className='collapse-content ml-6 flex flex-col gap-4'>
        {cheked && SUBCATEGORIES.map((subCategory) => (
          <li key={subCategory.id}>
            <label className='flex items-center justify-between'>
              <input
                type='radio'
                name='subcategory'
                className='hidden peer/subcat'
                value={subCategory.id}
                onChange={handleCheked}
              />
              <span className='cursor-pointer'>{subCategory.name}</span>
              <BsFillCircleFill className='mr-7 text-transparent peer-checked/subcat:text-[#C18D21]' />
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Collapse
