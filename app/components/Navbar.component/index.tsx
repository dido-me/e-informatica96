import { CategoryNavbar } from './CategoryNavbar.component'
import { MainNavbar } from './MainNavbar.component'

export function Navbar () {
  return (
    <nav className='sticky top-0 z-10 flex flex-col items-center w-full bg-white dark:bg-[#001f3d] '>
      <MainNavbar />
      <CategoryNavbar />
    </nav>
  )
}
