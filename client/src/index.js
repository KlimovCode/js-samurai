import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state';
import { addPost, addPostValueHandler, subscribe } from './redux/state';

let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addPostValueHandler={addPostValueHandler} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderTree(state)

subscribe(rerenderTree)