import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'

//Хок на проверку логина
//Тут же передаем пропс,что бы обертуть
let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authUser.isAuth
    }
}

export let withAuthRedirect = (Component) => {

    let AuthRedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />
        return <Component {...props} />
    }


        return connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
}



// if (!this.props.isAuth) return <Redirect to='/login' />