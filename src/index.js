import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import { store } from './Store/state';

console.log(store, 'Index')
const renderTree = (store) => {
    ReactDOM.render(
      <React.StrictMode>
        <App store={store}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
  
store.subscribe(renderTree)

renderTree(store)

reportWebVitals();
