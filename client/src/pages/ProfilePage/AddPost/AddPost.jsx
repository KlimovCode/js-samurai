import React, { Component } from 'react'

export default class AddPost extends Component {
  render() {
    return (
      <div className="addpost">
        <h3 className="addpost__title">AddPost</h3>
        <textarea className="addpost__text" id="" cols="30" rows="10"></textarea>
        <button className="addpost__btn">Add post</button>
      </div>
    )
  }
}