import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './components/Redux/State';
import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree =(state)=>{
  root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App appState={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  </React.StrictMode>
);
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

export default rerenderEntireTree;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

