import { useField, ErrorMessage  } from 'formik'
import classes from './FormsControl.module.css'

export let MyTextInput = ({ label, ...props}) => {

    const [field , meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={`${classes.inputStyle} ${meta.touched && meta.error ? classes.inputInvalid : null}`}
                {...field} {...props}/>
            <ErrorMessage component='div' className={classes.error} name={field.name}/>
        </>
    )
}


export let MyCheckbox = ({ children, ...props }) => {
    
    const [field, meta] = useField({ ...props, type: 'checkbox' })

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props}/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </>
    )
}

export let MyTextarea = ({...props }) => {
    
    const [field, meta] = useField(props)

    return (
        <>
            <label>
                <textarea {...field} {...props}/>
            </label>
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </>
    )
}

