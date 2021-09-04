import classes from './Button.module.css'

const Button = ({buttonText, onClickFunc, ...props}) => {
    return (
        <>
            <button className={classes.style}
                    onClick={onClickFunc}
                    {...props}>
                {buttonText}
            </button>
        </>
    )
}

export default Button