import { call, put, takeEvery } from '@redux-saga/core/effects'
import { AxiosResponse, getProductsAPI } from '../../api/getProducts'
import { SET_ALL_PRODUCTS_ERROR, GET_ALL_PRODUCTS } from '../../consts'
import { actions } from '../productsActions'

export function* handleAllProducts() {
    try {
        const res: AxiosResponse = yield call(getProductsAPI)
        yield put(actions.setAllProducts(res.data))
    } catch {
        yield put({ type: SET_ALL_PRODUCTS_ERROR, error: 'Error fetching all products' })
    }
}

export function* watchHandleAllProducts() {
    yield takeEvery(GET_ALL_PRODUCTS, handleAllProducts)
}