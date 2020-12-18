import React, { Component } from 'react'
import avatar from '../../../assets/avatar.jpeg'

export default class Posts extends Component {
  posts = [
    { id: 1, name: 'AAA' }
  ]

  render() {
    return (
      <div className="posts">
        <h3 className="posts__title">Posts</h3>
        <Post text="abc" />
        <Post text="abc" />
        <Post text="abc" />
      </div>
    )
  }
}

class Post extends Component {
  render() {
    return (
      <div className="post">
        <img src={avatar} alt="" className="avatar" />
        <span className="text">{this.props.text}</span>
      </div>
    )
  }
}