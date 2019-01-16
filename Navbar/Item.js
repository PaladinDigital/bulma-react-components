import React from 'react'

export class NavbarItem extends React.Component {
  render () {
    return (
      <a className="navbar-item" href={this.props.url}>
        {this.props.title || null}
        {this.props.children || null}
      </a>
    )
  }
}