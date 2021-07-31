// import logo from './logo.svg';

import './App.css';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';



function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Aside />
      <Profile />
      <Footer />
    </div>
  )
}



export default App;