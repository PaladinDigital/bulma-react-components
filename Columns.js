import React from 'react'

export class Column extends React.Component {
  classes () {
    let classes = ['column']
    if (typeof this.props.classes !== "undefined") {
      this.props.classes.forEach(c => {
        classes.push(c)
      })
    }
    return classes.join(' ')
  }

  /**
   * Render a column.
   * @returns {*}
   */
  render () {
    let columnClass = this.classes()
    return (
      <div className={columnClass}>
        {this.props.children}
      </div>
    )
  }
}

export class Columns extends React.Component {
  /**
   * Render the columns.
   * @returns {*}
   */
  render () {
    return (
      <div className="columns">
        {this.props.children}
      </div>
    )
  }
}