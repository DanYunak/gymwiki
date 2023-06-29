import { GET_ALL_EXERCISES, SET_ALL_EXERCISES, SET_CREATE_EXERCISE_WINDOW, SET_DELETE_EXERCISE_WINDOW, SET_EDIT_EXERCISE_WINDOW } from '../consts'

export const actions = {
    getAllExercises: () => ({ type: GET_ALL_EXERCISES } as const),
    setAllExercises: (exercises: any) => ({ type: SET_ALL_EXERCISES, exercises } as const),

    setCreateExerciseWindow: (boolean: boolean) => ({ type: SET_CREATE_EXERCISE_WINDOW, boolean } as const),
    setEditExerciseWindow: (boolean: boolean) => ({ type: SET_EDIT_EXERCISE_WINDOW, boolean } as const),
    setDeleteExerciseWindow: (boolean: boolean) => ({ type: SET_DELETE_EXERCISE_WINDOW, boolean } as const)
}