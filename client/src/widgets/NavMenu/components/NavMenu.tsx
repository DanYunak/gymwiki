import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './NavMenu.scss'

export const NavMenu: FC = () => {
    return (
        <nav className='nav'>
            <NavLink className='nav__link' to='/exercises'>Exercises</NavLink>
            <NavLink className='nav__link' to='/products'>Store</NavLink>
            <div className='nav__auth'>
                <NavLink to='/registration'>Sign Up</NavLink>
                <NavLink to='/login'>Sign In</NavLink>
            </div>
        </nav>
    )
}