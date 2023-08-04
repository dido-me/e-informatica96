import {
  Product as ProductModel,
  ProductModelWithQuantity
} from '@src/models/product'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartState {
  cart: ProductModelWithQuantity[]
  addProduct: (product: ProductModel | ProductModelWithQuantity) => void
  removeProduct: (product: ProductModel | ProductModelWithQuantity) => void
  resetProducts: () => void
  restOneProduct: (product: ProductModel | ProductModelWithQuantity) => void
}

const addProduct = ({
  product,
  state
}: {
  product: ProductModel | ProductModelWithQuantity
  state: ProductModelWithQuantity[]
}) => {
  const { id } = product
  const productIndexExist = state.findIndex(
    (item: ProductModelWithQuantity) => item.id === id
  )

  if (productIndexExist >= 0) {
    const newState = [
      ...state.slice(0, productIndexExist),
      {
        ...state[productIndexExist],
        quantity: state[productIndexExist].quantity + 1
      },
      ...state.slice(productIndexExist + 1)
    ]

    return newState
  }
  const newState = [...state, { ...product, quantity: 1 }]

  return newState
}

const restOneProduct = ({
  product,
  state
}: {
  product: ProductModel | ProductModelWithQuantity
  state: ProductModelWithQuantity[]
}) => {
  const { id } = product
  const productIndexExist = state.findIndex(
    (item: ProductModelWithQuantity) => item.id === id
  )

  if (productIndexExist >= 0) {
    const newState = [
      ...state.slice(0, productIndexExist),
      {
        ...state[productIndexExist],
        quantity:
          state[productIndexExist].quantity > 1
            ? state[productIndexExist].quantity - 1
            : 1
      },
      ...state.slice(productIndexExist + 1)
    ]

    return newState
  }
  const newState = [...state, { ...product, quantity: 1 }]
  return newState
}

const removeProduct = ({
  product,
  state
}: {
  product: ProductModel | ProductModelWithQuantity
  state: ProductModelWithQuantity[]
}) => {
  const { id } = product
  const newState = state.filter(
    (item: ProductModelWithQuantity) => item.id !== id
  )

  return newState
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addProduct: (product) =>
        set(({ cart }) => ({
          cart: addProduct({ product, state: cart })
        })),
      removeProduct: (product) =>
        set(({ cart }) => ({
          cart: removeProduct({ product, state: cart })
        })),
      restOneProduct: (product) =>
        set(({ cart }) => ({
          cart: restOneProduct({ product, state: cart })
        })),
      resetProducts: () => set({ cart: [] })
    }),
    {
      name: 'cart-storage'
    }
  )
)
