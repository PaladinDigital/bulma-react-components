import React from 'react'
import { Link } from 'gatsby'

export class Breadcrumbs extends React.Component {

  /**
   * Verify that breadcrumb has valid attributes.
   * @param crumb
   * @returns {boolean}
   */
  crumbIsValid (crumb) {
    let hasUrl = typeof crumb.url !== "undefined";
    let hasName = typeof crumb.name !== "undefined";

    if (crumb.active) {
      return hasName;
    }
    return (hasUrl && hasName);
  }

  crumb (c) {
    if (!this.crumbIsValid(c)) {
      return ``;
    }

    if (c.active) {
      return <li className="is-active" key={c.name}><a href="#" aria-current="page">{c.name}</a></li>
    }

    return <li key={c.name}><Link href={c.url}><a>{c.name}</a></Link></li>
  }

  render () {
    let crumbs = this.props.crumbs

    return <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs"><ul>{crumbs.map(c => {
      return this.crumb(c)
    })}</ul></nav>
  }
}
