import { Button } from '@mui/material'
import { Input, Select } from 'antd'
import { Formik } from 'formik'
import { FC, useEffect } from 'react';
import { Close } from '../../../entities/Close/components/Close'
import { ExerciseType } from '../../../entities/Exercise/model/types'
import { useAppDispatch } from '../../../redux/store'
import { equipmentOptions } from '../../../shared/model/equipmentOptions'
import { musclesOptions } from '../../../shared/model/musclesOptions'
import { actions } from '../../../widgets/Exercises/model/exercisesActions'
import './EditExercise.scss'

type PropsType = {
    onSubmit: (formData: any) => void
    exercise: ExerciseType | null
}

export const EditExercise: FC<PropsType> = ({ onSubmit, exercise }) => {
    const onSearch = (value: string) => {
        console.log('search:', value)
    }

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(actions.setCreateExerciseWindow(false))
    }, [])

    const handleCloseWindow = () => {
        dispatch(actions.setEditExerciseWindow(false))
    }

    return (
        <div className='edit__exercise_window'>
            <Formik initialValues={{ name: exercise?.name, primaryMuscles: exercise?.primaryMuscles, secondaryMuscles: exercise?.secondaryMuscles, equipment: exercise?.equipment, img: exercise?.img, type: 'custom' }}
                onSubmit={onSubmit}>
                {formik =>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='name'>
                            <span>Name:</span>
                            <Input name='name' placeholder='Name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        </div>
                        <div className='primary__muscles'>
                            <span>Primary Muscles:</span>
                            <Select
                                mode='multiple'
                                defaultValue={exercise?.primaryMuscles}
                                onChange={(value) => formik.setFieldValue('primaryMuscles', value)}
                                showSearch
                                placeholder='Select a muscle group'
                                optionFilterProp='children'
                                style={{ width: 200 }}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={musclesOptions}
                            />
                        </div>
                        <div className='secondary__muscles'>
                            <span>Secondary Muscles:</span>
                            <Select
                                mode='multiple'
                                defaultValue={exercise?.secondaryMuscles}
                                onChange={(value) => {
                                    formik.setFieldValue('secondaryMuscles', value)
                                }}
                                showSearch
                                placeholder='Select a muscle group'
                                optionFilterProp='children'
                                style={{ width: 200 }}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={musclesOptions}
                            />
                        </div>
                        <div className='equipment'>
                            <span>Equipment:</span>
                            <Select
                                defaultValue={exercise?.equipment}
                                onChange={(value) => formik.setFieldValue('equipment', value)}
                                showSearch
                                placeholder='Select an equipment'
                                optionFilterProp='children'
                                style={{ width: 200 }}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={equipmentOptions}
                            />
                        </div>
                        <div className='image'>
                            <span>Image:</span>
                            <Input name='img' placeholder='Image URL' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.img} />
                        </div>
                        <div className='btn__actions'>
                            <Button variant='contained' type='submit'>Save</Button>
                        </div>
                    </form>}
            </Formik>
            <div onClick={handleCloseWindow}>
                <Close />
            </div>
        </div>
    )
}