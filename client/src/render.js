import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, addPostValueHandler } from './redux/state';

export const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addPostValueHandler={addPostValueHandler} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}