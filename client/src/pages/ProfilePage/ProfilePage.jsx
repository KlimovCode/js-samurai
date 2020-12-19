import React, { Component } from 'react'

import UserInfo from './UserInfo/UserInfo'
import AddPost from './AddPost/AddPost'
import Posts from './Posts/Posts'

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>ProfilePage</h1>
        <UserInfo />
        <AddPost
          dispatch={this.props.dispatch}
          addPostValue={this.props.profilePage.addPostValue} />
        <Posts posts={this.props.profilePage.posts} />
      </div>
    )
  }
}