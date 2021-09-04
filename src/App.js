import './App.css';
import Aside from './components/Aside/Aside';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { BrowserRouter, Route} from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersListContainer';
import React from 'react';
import LoginContainer from './components/Login/LoginContainer';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { initializeApp } from './Store/reducer/AppReducer';
import Preloader from './components/common/preloader/Preloader';





class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Aside />
          <div class='app-wrapper-content'>
            <Route path='/login' render={() => <LoginContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
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

export default compose(
    connect(mapStateToProps, {initializeApp} )
)(App)

// export default App