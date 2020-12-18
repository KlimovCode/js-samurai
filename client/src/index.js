import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, author: 'AAA', text: 'abc text', likes: 1 },
  { id: 2, author: 'BBB', text: 'bac text', likes: 3 }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
