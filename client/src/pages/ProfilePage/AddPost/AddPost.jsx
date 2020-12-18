import React, { Component } from 'react'

export default (props) => {
  let txt = React.createRef()

  return (
    <div className="addpost">
      <h3 className="addpost__title">AddPost</h3>
      <textarea className="addpost__text" id="" cols="30" rows="10"
        ref={txt}
      ></textarea>
      <button className="addpost__btn"
        onClick={() => props.addPost(txt.current.value)}
      >Add post</button>
    </div >
  )
}