import { AppStateType } from '../../../redux/store'

export const getAllProducts = (state: AppStateType) => {
    return state.productsPage.products
}