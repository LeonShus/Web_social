import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import ProviderApp from './App';

// Разбиваем приложения на компоненты
//Используем библиотеку React-Redux и прокидываем данные в контекст 


ReactDOM.render(
  <React.StrictMode>
      <ProviderApp/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
