import { Button } from '@mui/material'
import { Input, Select } from 'antd'
import { Formik } from 'formik'
import { FC, useEffect, useState } from 'react';
import './CreateExercise.scss'
import { musclesOptions } from '../../../shared/model/musclesOptions'
import { equipmentOptions } from '../../../shared/model/equipmentOptions'
import { useAppDispatch } from '../../../redux/store'
import { actions } from '../../../widgets/Exercises/model/exercisesActions'
import { Close } from '../../../entities/Close/components/Close'

type PropsType = {
    onSubmit: (formData: any) => void
}

export const CreateExercise: FC<PropsType> = ({ onSubmit }) => {
    const [selectedPrimaryMuscles, setSelectedPrimaryMuscles] = useState<string[]>([])
    const [selectedSecondaryMuscles, setSelectedSecondaryMuscles] = useState<string[]>([])

    const onSearch = (value: string) => {
        console.log('search:', value)
    }

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(actions.setEditExerciseWindow(false))
    }, [])

    const handleCloseWindow = () => {
        dispatch(actions.setCreateExerciseWindow(false))
    }

    const handlePrimaryMuscles = (value: string[]) => {
        setSelectedPrimaryMuscles(value)
        setSelectedSecondaryMuscles(prevSelectedSecondaryMuscles => prevSelectedSecondaryMuscles.filter(muscle => !value.includes(muscle)))
    }

    const handleSecondaryMuscles = (value: string[]) => {
        setSelectedSecondaryMuscles(value)
        setSelectedPrimaryMuscles(prevSelectedPrimaryMuscles => prevSelectedPrimaryMuscles.filter(muscle => !value.includes(muscle)))
    }

    return (
        <div className='create__exercise_window'>
            <Formik initialValues={{ name: '', primaryMuscles: '', secondaryMuscles: '', equipment: '', img: '', type: 'custom' }}
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
                                onChange={(value) => {
                                    handlePrimaryMuscles(value)
                                    formik.setFieldValue('primaryMuscles', value)
                                }}
                                showSearch
                                value={selectedPrimaryMuscles}
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
                                onChange={(value) => {
                                    handleSecondaryMuscles(value)
                                    formik.setFieldValue('secondaryMuscles', value)
                                }}
                                value={selectedSecondaryMuscles}
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
        </div >
    )
}