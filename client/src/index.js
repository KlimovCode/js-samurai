import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
// import { study } from './redux/redux-study';
import { study2 } from './redux/react-redux-study';

let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderTree(store.getState())

store.subscribe(rerenderTree)

study2()
