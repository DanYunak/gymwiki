import { Schema, model } from 'mongoose'

export const musclesEnum = ['Adductors', 'Biceps', 'Calves', 'Chest', 'Forearms', 'Glutes', 'Hamstrings', 'Lats', 'Lower Back', 'Quadriceps', 'Shoulders', 'Traps', 'Triceps', 'Upper Back']
export const equipmentEnum = ['Barbell', 'Dumbbell', 'Kettlebell', 'Machine', 'Plate']

const ExerciseSchema = new Schema({
    name: { type: String, unique: true, required: true },
    primaryMuscles: {
        type: [String],
        enum: musclesEnum,
        required: true
    },
    secondaryMuscles: {
        type: [String],
        enum: musclesEnum,
    },
    equipment: {
        type: String,
        enum: equipmentEnum,
        required: true
    },
    img: { type: String }
})

export default model('Exercise', ExerciseSchema)