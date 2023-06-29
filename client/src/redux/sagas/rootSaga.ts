import { all, fork } from '@redux-saga/core/effects'
import { exercisesRootSaga } from './exercisesRootSaga'
import { productsRootSaga } from './productsRootSaga'

export function* rootSaga() {
    yield all([
        fork(exercisesRootSaga),
        fork(productsRootSaga)
    ])
}