import React from 'react'

export class DropdownMenu extends React.Component {
  render () {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          {this.props.title}
        </a>

        <div className="navbar-dropdown">
          {this.props.children}
        </div>
      </div>
    )
  }
}
