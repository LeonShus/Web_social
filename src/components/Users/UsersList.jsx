import classes from "./UsersList.module.css"
import userPhoto from '../../assets/images/userDef.png'
import Preloader from "../common/preloader/Preloader"
import { NavLink } from "react-router-dom"
import { Pagination } from "../common/Pagination/Pagination"



const UsersList = (props) => {

    return (
        <div>
            {/* Создаем список страничек */}
            <Pagination totalItemsCount={props.totalUsersCount}
                usersOnPage={props.usersOnPage}
                pageOnTarget={props.pageOnTarget}
                onPageChange={props.onPageChange} />
            {/* Выводим пользователей  */}
            {props.onFetching
                ? <Preloader />
                : <div className={classes.container}>
                    {
                        props.users.map(el => <div className={classes.userContainer} key={el.id}>
                            <div>
                                {/* Возможность посетить страницу пользователя */}
                                <NavLink to={'/profile/' + el.id}>
                                    <img className={classes.avatar} alt='Avatar'
                                        src={el.photos.small != null ? el.photos.small : userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {/* Возможность зафоловить или анфоловить пользователя */}
                                {el.followed
                                    ? <button disabled={props.fetchingStatus.some(id => id === el.id)}
                                        onClick={() => { props.unfollow(el.id) }}>Unfollow</button>
                                    : <button disabled={props.fetchingStatus.some(id => id === el.id)}
                                        onClick={() => { props.follow(el.id) }}>Follow</button>}

                            </div>
                            <div>
                                {el.name}
                            </div>
                            <div>
                                {el.status}
                            </div>
                        </div>
                        )
                    }

                </div>
            }
        </div>
    )
}

export default UsersList
