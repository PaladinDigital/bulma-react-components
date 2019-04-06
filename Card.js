import React from 'react'
import Link from 'next/link'

export class Card extends React.Component {
  getLink () {
    if (typeof this.props.url !== 'undefined') {
      return this.props.url
    }
  }

  getContentFragment (fragment) {
    let image = this.renderCardImage()
    let video = this.renderCardYoutubeVideo()
    let header = this.renderCardHeader()
    let content = this.cardContent()
    let link = this.getLink()

    let fragments = {
      card: (
        <div className='card'>
          {image}
          {video}
          {header}
          {content}
        </div>
      ),
      cardHeader: <div className='card-header'>
        <div className='card-header-title'>
          {this.props.title}
        </div>
      </div>
    }
    fragments.linkCard = ''

    if (typeof this.props.url !== 'undefined') {
      fragments.linkCard = <Link href={link}>{fragments.card}</Link>
    }

    return fragments[fragment]
  }

  /**
   * Render the Card component.
   * @returns {*}
   */
  render () {
    if (typeof this.props.url !== 'undefined') {
      return this.getContentFragment('linkCard')
    }

    return this.getContentFragment('card')
  }

  renderCardHeader () {
    let meta
    let title = ''
    let header
    if (typeof this.props.title !== 'undefined') {
      title = this.props.title
    }

    let date = ''
    if (typeof this.props.date !== 'undefined') {
      date = this.props.date
    }

    meta = (
      <>
        <i />{date}
      </>
    )

    if (typeof this.props.title !== 'undefined') {
      header = (
        <>
          <div className='card-meta'>
            {meta}
          </div>
          <div className='card-header'>
            <div className='card-header-title'>
              {title}
            </div>
          </div>
        </>
      )
    }
    return header
  }

  cardContent () {
    if (this.props.children) {
      let content = this.props.children
      return (
        <div className='card-content'>
          {content}
        </div>
      )
    }
  }

  renderCardImage () {
    if (typeof this.props.image !== 'undefined') {
      let title = this.props.title || ''
      return <img src={this.props.image} alt={title} />
    }
    return ''
  }

  renderCardYoutubeVideo () {
    let height = this.props.videoHeight || '175px'

    if (typeof this.props.ytVideo !== 'undefined') {
      let video = 'https://www.youtube.com/embed/' + this.props.ytVideo
      return (
        <iframe width='100%' height={height} src={video} frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen />
      )
    }
    return ''
  }
}
