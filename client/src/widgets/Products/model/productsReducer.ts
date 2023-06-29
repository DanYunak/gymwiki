import { InferActionsTypes } from '../../../redux/store'
import { actions } from './productsActions'
import { ProductType } from '../../../entities/Product'

const initialState = {
    products: [] as ProductType[]
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export const productsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'PRODUCTS/SET_ALL_PRODUCTS':
            return {
                ...state,
                products: [...action.products]
            }

        default: return state
    }
}