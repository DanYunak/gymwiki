import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { FC, ChangeEvent } from 'react'

type PropsType = {
    handleSort: (value: string, checked: boolean) => void
    selectedEquipment: string[]
}

export const SortExercisesEquipment: FC<PropsType> = ({ handleSort, selectedEquipment }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        handleSort(e.target.value, checked)
    }

    return (
        <div>
            <FormGroup style={{ color: 'white' }}>
                <FormControlLabel control={<Checkbox onChange={handleChange} value='None' checked={selectedEquipment.includes('None')} sx={{ color: 'white' }} />} label='None' />
                <FormControlLabel control={<Checkbox onChange={handleChange} value='Barbell' checked={selectedEquipment.includes('Barbell')} sx={{ color: 'white' }} />} label='Barbell' />
                <FormControlLabel control={<Checkbox onChange={handleChange} value='Dumbbell' checked={selectedEquipment.includes('Dumbbell')} sx={{ color: 'white' }} />} label='Dumbbell' />
                <FormControlLabel control={<Checkbox onChange={handleChange} value='Kettlebell' checked={selectedEquipment.includes('Kettlebell')} sx={{ color: 'white' }} />} label='Kettlebell' />
                <FormControlLabel control={<Checkbox onChange={handleChange} value='Machine' checked={selectedEquipment.includes('Machine')} sx={{ color: 'white' }} />} label='Machine' />
                <FormControlLabel control={<Checkbox onChange={handleChange} value='Plate' checked={selectedEquipment.includes('Plate')} sx={{ color: 'white' }} />} label='Plate' />
            </FormGroup>
        </div>
    )
}