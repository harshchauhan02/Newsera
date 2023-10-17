import React, { Component } from 'react'
import NewsUpdate from './NewsUpdate'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

import carousel from './carousel';


export class News extends Component {

  static defaultProps = {
    category: "General",
  }
  static propTypes = {
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
    }
  }

  async updateNews() {
    this.props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&page=${this.state.page + 1}&pageSize=25`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(50);
    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();

  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&page=${this.state.page + 1}&pageSize=25`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
  }
  // nextclick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  // previousclick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  state = {
    isSubscribed: false,
  };

  // Function to handle subscription
  handleSubscribe = () => {
    this.setState({ isSubscribed: true });
  }

  render() {

    return (

      <div className='container my-5'>

        {/* <div className="container d-flex justify-content-between">

          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousclick}>Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.nextclick}>Next</button>

        </div> */}

        {/* <h2 className="text-center">TOP HEADLINES</h2> */}
        <hr />
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="input-group mt-2">
              <input
                type="email"
                className="form-control"
                placeholder="Stay Informed – Subscribe with your email"
              />
              <button
                className="btn btn-success"
                onClick={this.handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <h5 className='container m-1 text-lg-end'>
              Total Results : {this.state.totalResults}
            </h5>
          </div>
        </div>

        {this.state.isSubscribed && (
          <div className="alert alert-success mt-3" role="alert">
            <h4 class="alert-heading">Thank you for Subscribing!</h4>
            <p>We will keep you updated with the latest news.</p>
          </div>
        )}
<carousel/>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="row" >
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsUpdate title={element.title.slice(0, 110)} newsUrl={element.url} imageUrl={element.urlToImage}
                  source={element.source.name} author={element.author} />
              </div>
            })}
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onclick={this.previousclick}>Previous</button>
          <h5>Total Results : {this.state.totalResults}</h5>
          <button type="button" className="btn btn-dark" onclick={this.nextclick}>ext</button>
        </div> */}
      </div>

    )
  }
}

export default News



