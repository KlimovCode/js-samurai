import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import './common/reset.css'
import './App.css'
import Header from './common/Header'
import Nav from './common/Nav'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import DialogsPage from './pages/DialogsPage/DialogsPage'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="main">
            <Nav />
            {/* <Route path="/" render={() => <ProfilePage
              profilePage={props.state.profilePage}
              addPost={props.addPost} />} exact /> */}

            <Route path="/profile" render={() => <ProfilePage
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}

              addPost={props.addPost}
              addPostValueHandler={props.addPostValueHandler} />
            } exact />

            <Route path="/dialogs" render={() => <DialogsPage />} exact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
