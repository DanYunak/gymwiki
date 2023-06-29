import { Button } from '@mui/material'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Exercise } from '../../../entities/Exercise'
import { ExerciseType } from '../../../entities/Exercise/model/types'
import { CreateExercise } from '../../../features/CreateExercise'
import { DeleteExercise } from '../../../features/DeleteExercise/components/DeleteExercise'
import { EditExercise } from '../../../features/EditExercise'
import { SortExercisesMuscle } from '../../../features/SortExercisesMuscle'
import { useAppDispatch } from '../../../redux/store'
import { actions } from '../model/exercisesActions'
import { getAllExercises, getCreateExerciseWindow, getDeleteExerciseWindow, getEditExerciseWindow } from '../model/exercisesSelectors'
import './Exercises.scss'


export const Exercises: FC = () => {
    const [selectedMuscles, setSelectedMuscles] = useState<string[]>([])
    const [selectedEquipment, setSelectedEquipment] = useState<string[]>([])
    const [editedExercise, setEditedExercise] = useState<ExerciseType | null>(null)
    const [deletedExercise, setDeletedExercise] = useState<ExerciseType | null>(null)
    const [exercisesCount, setExercisesCount] = useState(10)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(actions.getAllExercises())
    }, [])

    useEffect(() => {
        return () => {
            setSelectedMuscles([])
        }
    }, [])

    const exercises = useSelector(getAllExercises)
    const createExerciseWindow = useSelector(getCreateExerciseWindow)
    const editExerciseWindow = useSelector(getEditExerciseWindow)
    const deleteExerciseWindow = useSelector(getDeleteExerciseWindow)

    const handleSortMuscles = (value: string, checked: boolean) => {
        if (checked) {
            setSelectedMuscles([...selectedMuscles, value])
        } else {
            setSelectedMuscles(selectedMuscles.filter(muscle => muscle !== value))
        }
    }

    const handleSortEquipment = (value: string, checked: boolean) => {
        if (checked) {
            setSelectedEquipment([...selectedEquipment, value])
        } else {
            setSelectedEquipment(selectedEquipment.filter(equipment => equipment !== value))
        }
    }


    const handleCreateExercise = () => {
        dispatch(actions.setCreateExerciseWindow(!createExerciseWindow))
    }

    const onSubmitCreate = async (formData: any) => {
        try {
            const res = await axios.post('http://localhost:5000/api/exercises/create', formData)
            dispatch(actions.setCreateExerciseWindow(!createExerciseWindow))
            dispatch(actions.getAllExercises())
        } catch (e) {
            console.error(e)
        }
    }

    const onSubmitEdit = async (formData: any) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/exercises/edit/${editedExercise?._id}`, formData)
            dispatch(actions.setEditExerciseWindow(!editExerciseWindow))
            dispatch(actions.getAllExercises())
        } catch (e) {
            console.error(e)
        }
    }

    const onSubmitDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/exercises/delete/${deletedExercise?._id}`)
            dispatch(actions.setDeleteExerciseWindow(!deleteExerciseWindow))
            dispatch(actions.getAllExercises())
        } catch (e) {
            console.error(e)
        }
    }

    const handleEditExercise = (exercise: ExerciseType) => {
        setEditedExercise(exercise)
        dispatch(actions.setEditExerciseWindow(!editExerciseWindow))
    }

    const handleDeleteExercise = (exercise: ExerciseType) => {
        setDeletedExercise(exercise)
        dispatch(actions.setDeleteExerciseWindow(!deleteExerciseWindow))
    }

    const handleMoreExercises = () => {
        setExercisesCount(exercisesCount + 10)
    }

    return (
        <div className='exercises'>
            <div className='sort__exercises'>
                <div className='sort__exercises_muscle'>
                    <SortExercisesMuscle handleSort={handleSortMuscles} selectedMuscles={selectedMuscles} />
                </div>
            </div>
            <div className='exercises__list'>
                {exercises
                    .filter(exercise => selectedMuscles.length === 0 || exercise.primaryMuscles.some(muscle => selectedMuscles.includes(muscle)))
                    .slice(0, exercisesCount)
                    .map((exercise: ExerciseType) => (
                        <Exercise
                            key={exercise._id}
                            exercise={exercise}
                            handleEditExercise={handleEditExercise}
                            handleDeleteExercise={handleDeleteExercise}
                        />
                    ))}
            </div>
            {exercises.length > 10 && exercises.filter(exercise => selectedMuscles.length === 0 || exercise.primaryMuscles.some(muscle => selectedMuscles.includes(muscle))).slice(0, exercisesCount).length >= 10 && (
                <div className='load__more_exercises'>
                    <Button variant='contained' onClick={handleMoreExercises}>Load More</Button>
                </div>
            )}
            <div className='create__exercise'>
                <Button variant='contained' onClick={handleCreateExercise}>Create</Button>
            </div>
            {createExerciseWindow &&
                <CreateExercise onSubmit={onSubmitCreate} />
            }
            {editExerciseWindow &&
                <EditExercise onSubmit={onSubmitEdit} exercise={editedExercise} />
            }
            {deleteExerciseWindow &&
                <DeleteExercise onSubmit={onSubmitDelete} exercise={deletedExercise} />
            }
        </div>
    )
}