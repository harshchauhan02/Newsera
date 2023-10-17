import React, { Component } from 'react'
import newsimage from './newsimage.jpeg'

export class NewsUpdate extends Component {
  render() {
    let { title, imageUrl, newsUrl, source, author } = this.props;
    return (
      <div className='my-3 '>
        <div className="card" style={{ width: "25rem" }}>
          <div className="card-header bg-warning" >
            <b>{source}</b>
          </div>
          <img src={!imageUrl? newsimage : imageUrl} className="card-img-top" alt="..." height="200px" width= "400px" />

          <div className="card-body">
            <div style={{ height: '80px' }}>
              <h5 className="card-title">{title.slice(0, 100)}...</h5>
            </div>

            <a target="_blank" rel="noreferrer" href={newsUrl} className="btn btn-primary">Read</a>
          </div>
        </div>
        <div className="card-footer text-success"> <b title="Source Title"> By: {!author ? source.slice (0,30) : author.slice (0,30)}</b>
        </div>
      </div>
    )
  }
}

export default NewsUpdate