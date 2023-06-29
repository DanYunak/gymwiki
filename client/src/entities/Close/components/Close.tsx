import { FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import './Close.scss'

export const Close: FC = () => {
    return (
        <div className='close'>
            <CloseIcon style={{ fontSize: 30, cursor: 'pointer' }} />
        </div>
    )
}