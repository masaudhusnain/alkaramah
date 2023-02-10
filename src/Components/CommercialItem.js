import React, { Component } from 'react'


export class CommercialItem extends Component {
  render() {
    let { title, description, imageurl, url } = this.props
    return (
      <div>
        <div className="card my-4" style={{ width: '25rem' }}>
          <img src={imageurl} className="card-img-top zoom" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'blue' }}>{title}</h5>
            <p className="card-text">{description}</p>
            <a rel='noreferrer' href={url} target='_blank' className="btn btn-sm btn-dark"  >Click for Project Details</a>
          </div>
        </div>
      </div>
    )
  }
}
export default CommercialItem


