import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import store from './Store/ReduxStore';
import { Provider } from 'react-redux'

// Разбиваем приложения на компоненты
//Используем библиотеку React-Redux и прокидываем данные в контекст 


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
