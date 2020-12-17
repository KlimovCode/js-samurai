import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav>
          <ul>
            <li><a href="">profile</a></li>
            <li><a href="">dialogs</a></li>
            <li><a href="">users</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}