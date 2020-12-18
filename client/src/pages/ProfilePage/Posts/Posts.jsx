import React, { Component } from 'react'
import avatar from '../../../assets/avatar.jpeg'

export default class Posts extends Component {

  getPosts = () => {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <Post author={post.author} text={post.text} likes={post.likes} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="posts">
        <h3 className="posts__title">Posts</h3>
        {this.getPosts()}
      </div>
    )
  }
}

class Post extends Component {
  render() {
    return (
      <div className="post">
        <img src={avatar} alt="" className="avatar" />
        <div className="post__content">
          <span className="author"> {this.props.author} </span>
          <span className="text"> {this.props.text} </span>
          <span className="likes"> {this.props.likes} </span>
        </div>

      </div>
    )
  }
}