import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} addPostValueHandler={store.addPostValueHandler.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderTree(store.getState())

store.subscribe(rerenderTree)