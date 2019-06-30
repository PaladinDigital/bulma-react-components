import React from 'react'
import { Link } from 'gatsby'
import BaseCard from '../Card'

export class Card extends BaseCard {
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
}
