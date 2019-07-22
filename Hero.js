import React from 'react'

export class Hero extends React.Component {
  render () {
    return (
      <>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              {!!this.props.title ? <h1 class="title">
                {this.props.title}
              </h1> : ''}
              {!!this.props.subtitle ? <h2 class="subtitle">
                {this.props.subtitle}
              </h2> : ''}
            </div>
          </div>
        </section>
      </>
    )
  }
}
