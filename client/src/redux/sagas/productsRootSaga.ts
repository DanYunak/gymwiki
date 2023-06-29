import { all } from '@redux-saga/core/effects'
import { watchHandleAllProducts } from '../../widgets/Products/model/sagas/handleAllProducts'

export function* productsRootSaga() {
    yield all([
        watchHandleAllProducts()
    ])
}