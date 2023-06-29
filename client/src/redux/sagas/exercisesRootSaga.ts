import { all } from '@redux-saga/core/effects'
import { watchHandleAllExercises } from '../../widgets/Exercises/model/sagas/handleAllExercises'

export function* exercisesRootSaga() {
    yield all([
        watchHandleAllExercises()
    ])
}