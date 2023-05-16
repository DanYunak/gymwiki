import { Router } from 'express'
import exerciseContoller from '../controllers/exerciseContoller.js'

const router = new Router()

const { createExercise, editExercise, deleteExercise, getAllExercises, getExercisesByMuscle } = exerciseContoller

router.post('/create', createExercise)
router.put('/edit/:id', editExercise)
router.delete('/delete/:id', deleteExercise)
router.get('/', getAllExercises)
router.get('/:muscles', getExercisesByMuscle)

export default router