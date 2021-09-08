import './App.css'
import store from './Store/ReduxStore';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { BrowserRouter, Route } from 'react-router-dom'
import React, { Suspense } from 'react';
import LoginContainer from './components/Login/LoginContainer';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { initializeApp } from './Store/reducer/AppReducer';
import Preloader from './components/common/preloader/Preloader';
import { Provider } from 'react-redux'
//Ленивые загрузки
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersListContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))


class App extends React.Component {
  //Проверяем зплогинен ли пользователь
  componentDidMount() {
    this.props.initializeApp()
  }
  //показываем крутилку пока не обновятся данные о пользователе
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }


    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Aside />
          <div className='app-wrapper-content'>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
            </Suspense>
            <Route path='/login' render={() => <LoginContainer />} />
          </div>
          <Footer />

        </div>
      </BrowserRouter>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const AppWithProv = compose(
  connect(mapStateToProps, { initializeApp })
)(App)

// Оборачиваем компоненту стейтом передавая стор
const ProviderApp = () => {
  return (
  <Provider store={store}>
    <AppWithProv />
  </Provider>
  )
}


export default ProviderApp