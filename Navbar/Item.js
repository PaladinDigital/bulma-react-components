import React from 'react'

export class NavbarItem extends React.Component {
  render () {
    let rel = this.props.rel
    let target = this.props.target

    return (
      <a className='navbar-item' href={this.props.url} rel={rel} target={target}>
        {this.props.title || null}
        {this.props.children || null}
      </a>
    )
  }
}
