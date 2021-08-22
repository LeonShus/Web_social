import classes from "./UsersList.module.css"
import userPhoto from '../../assets/images/userDef.jpg'
import Preloader from "../common/preloader/Preloader"
import { NavLink } from "react-router-dom"



const UsersList = (props) => {
    let pages = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesArr = []

    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i)
    }
    console.log(props, 'adfafafafafaaaaaaaaaaaaaaaaaaa')
    return (
        <div>

            <span>{pagesArr.map(e => <span className={props.pageTarget == e ? classes.target : classes.point}
                onClick={() => { props.onPageChange(e) }} >{e}</span>)}</span>

            <div>
                {props.onFetching ? <Preloader /> : null}
            </div>

            <div className={classes.container}>
                {
                    props.users.map(el => <div className={classes.userContainer} key={el.id}>
                        <div>
                            <NavLink to={'/profile/' + el.id }>
                            <img className={classes.avatar}
                                src={el.photos.small != null ? el.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? <button disabled={props.fetchingStatus.some(id => id === el.id)}
                                onClick={ () => { props.unfollow(el.id) } }>Unfollow</button>
                                : <button disabled={props.fetchingStatus.some(id => id === el.id)}
                                onClick={ () => { props.follow(el.id) } }>Follow</button>}

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
        </div>
    )
}

export default UsersList

// class UsersList extends React.Component {

//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => this.props.setUsers(response.data.items))
//     }

//     onPageChange(pageNumber) {
//         this.props.changePage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//         .then(response => this.props.setUsers(response.data.items))
//     }

//     render() {
//         let pages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
//         let pagesArr = []

//         for (let i = 1; i <= pages; i++) {
//             pagesArr.push(i)
//         }

//         return (
//             <div>
//                 <span>{pagesArr.map(e => <span className={this.props.pageTarget == e ? classes.target : classes.point}
//                                                onClick={() => { this.onPageChange(e) }} >{e}</span>)}</span>

//                 <div className={classes.container}>

//                     {
//                         this.props.users.map(el => <div className={classes.userContainer} key={el.id}>
//                             <div>
//                                 <img className={classes.avatar}
//                                     src={el.photos.small != null ? el.photos.small : userPhoto} />
//                             </div>
//                             <div>
//                                 {el.followed
//                                     ? <button onClick={() => { this.props.unfollow(el.id) }}>Unfollow</button>
//                                     : <button onClick={() => { this.props.follow(el.id) }}>Follow</button>}

//                             </div>
//                             <div>
//                                 {el.name}
//                             </div>
//                             <div>
//                                 {el.status}
//                             </div>
//                         </div>
//                         )
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default UsersList