import { NavLink } from 'react-router-dom';
import classes from'./Aside.module.css'

const Aside = () => {
    return (
        <aside className={classes.aside}>
            <nav className={classes.nav}>
                <div>
                    <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>Dialogs</NavLink>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
                </div>
            </nav>
        </aside>
    )
}

export default Aside;