import preloader from '../../../assets/images/loading49.gif'
import classes from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={classes.pose}>
            <img src={preloader}></img>
        </div>
    )
}

export default Preloader