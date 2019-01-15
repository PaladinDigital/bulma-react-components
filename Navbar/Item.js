import React from 'react'

export class NavbarItem extends React.Component {
  render () {
    return (
      <a href={this.props.url}>
        {this.props.title}
      </a>
    )
  }
}