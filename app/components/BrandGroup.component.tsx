import Image from 'next/image'

const BRANDS = [
  'vmware',
  'lenovo',
  'aruba',
  'hp',
  'fortinet',
  'a10',
  'paloalto',
  'intel',
  'huawei',
  'microsoft',
  'cisco',
  'IBM',
  'dell',
  'juniper'
]

export function BrandGroup () {
  return (
    <section className='flex flex-col w-11/12 gap-6 m-auto my-10'>
      <h1 className='p-0 m-0 font-bold text-center dark:text-white text-inf-primary'>
        Nuestras Marcas
      </h1>
      <div className='flex flex-wrap justify-center px-16 py-10 gap-10 border-[0.1rem] border-gray-400 rounded-lg'>
        {BRANDS.map((brand, index) => (
          <Image
            src={`/brands/brand${index}.png`}
            className='w-32 aspect-[3/2] object-contain'
            width={72}
            height={72}
            alt={brand}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
