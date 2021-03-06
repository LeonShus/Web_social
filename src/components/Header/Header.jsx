import { NavLink } from 'react-router-dom'
import React from 'react'
import classes from './Header.module.css'
import logo from '../../assets/images/Logo.png'
import Button from '../common/Buttons/Button'

const Header = React.memo((props) => {
    console.log(props)
    //Выводим лого + логин кнопку или пользователя и логаут кнопку
    return (
        <header className={classes.header}>
            <div>
                <img className={classes.logo} src={logo} alt='Avatar'></img>
            </div>
            <div className={classes.login}>
                {!props.isAuth
                    ? <NavLink to='/login'><div>Login</div></NavLink>
                    : <div>
                        <span>{props.login}</span>
                        
                        <Button buttonText='logout' onClickFunc={props.logoutUser}/>
                    </div>
                }

            </div>

        </header>
    )
})

export default Header;