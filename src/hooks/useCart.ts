import { useCartStore } from '@src/stores'

export const useCart = () => {
  const store = useCartStore((state) => state)

  return store
}
