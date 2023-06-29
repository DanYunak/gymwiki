import { GET_ALL_PRODUCTS, SET_ALL_PRODUCTS } from '../consts'

export const actions = {
    getAllProducts: () => ({ type: GET_ALL_PRODUCTS } as const),
    setAllProducts: (products: any) => ({ type: SET_ALL_PRODUCTS, products } as const)
}