import './App.css';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



function App(props) {
  console.log(props, 'App')
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Aside />
        <div class='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile store={props.store}/>} />
          <Route path='/dialogs' render={() => <Dialogs store={props.store}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        <Footer />

      </div>
    </BrowserRouter>
  )
}



export default App;