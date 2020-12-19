import React, { Component } from 'react'

import { addPost, addPostValueHandler } from '../../../redux/store'

export default (props) => {
  let addPostValueRef = React.createRef()

  return (
    <div className="addpost">
      <h3 className="addpost__title">AddPost</h3>
      <textarea className="addpost__text" id="" cols="30" rows="10"
        ref={addPostValueRef}
        value={props.addPostValue}
        onChange={() => props.dispatch(addPostValueHandler(addPostValueRef.current.value))}
      />
      <button className="addpost__btn"
        onClick={() => {
          props.dispatch(addPost(props.addPostValue))
        }
        }
      >Add post</button>
    </div >
  )
}