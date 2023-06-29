import { FC } from 'react'
import './Header.scss'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import { NavMenu } from '../../NavMenu/components/NavMenu'

const logoLight = require('../../../shared/assets/logo_light.png')

export const Header: FC = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <FitnessCenterIcon style={{ color: '#fff', fontSize: 50 }} />
                <span>WIKI</span>
            </div>
            <NavMenu />
        </header>
    )
}