const mockCategory = [
  'Switch/Firewalls/Red',
  'Servidores y Componentes',
  'AccesPoint y Tarjetas de Video',
  'Alquiles y Licencias',
  'Equipos Conservados'
]

const mockSubCategory = [
  'Firewall',
  'Kit Stack Switches',
  'Router',
  'Switch Cisco Catalyst',
  'Switch Cisco Nexus',
  'Switch HPE',
  ' Switch Huawei',
  'Switch Juniper',
  'Tarjeta de Red',
  'Transceiver'
]

export function CategoryNavbar () {
  return (
    <ul className='justify-between hidden w-full py-4 dark:text-white text-inf-primary xl:flex'>
      {mockCategory.map((category, index) => (
        <li
          key={index}
          className='relative flex flex-col justify-center border-r-2 border-white grow last:border-r-0 '
        >
          <button className='btn btn-ghost hover:bg-inf-tertiary peer'>
            {category}
          </button>
          <div className='z-10 hidden hover:block peer-hover:block'>
            <ul className='absolute  w-full py-4 bg-white dark:bg-[#001f3d] rounded-b-lg shadow-lg'>
              {mockSubCategory.map((subCategory, index) => (
                <li key={index} className='px-4 py-2'>
                  <a href='#'>{subCategory}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}
