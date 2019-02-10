import React, { Component } from 'react';
import Card from './components/card';
import Navbar from './components/navbar'
import Pagination from './components/pagination'
import { key, baseUrl } from './util/api'
import Image from './components/image'


class App extends Component {

  state = {
    currentPage: 1,
    query: 'popular',
    movies: [],
    pageCount: 0,
    offset: 0,
    countPerPage: null,
    region: 'us'
  }

  componentDidMount() {
    this.discoverMovies()
  }

  discoverMovies = async () => {
    const { currentPage, query, region } = this.state
    const url = `${baseUrl}${query}?api_key=${key}&page=${currentPage}&region=${region}&adult=false`
    const response = await fetch(url)
    const json = await response.json()
    if (json.results) {
      const pageCount = Math.ceil(json.total_pages)
      this.setState({
        movies: [...json.results],
        pageCount: pageCount,
      })
    }
  }

  handleFetchRequest = async (e) => {
    this.setState({ query: e, currentPage: 1 },
      () => this.discoverMovies()
    )
  }

  handleLoadMoreMovies = (data) => {
    const selected = data.selected + 1
    this.setState({ currentPage: selected }, () => {
      this.discoverMovies()
    })
  }

  render() {
    const {
      movies,
      countPerPage,
      pageCount,
      query } = this.state

    return (
      <div>
        <div>
          <Navbar handleFetchRequest={this.handleFetchRequest} />
        </div>
        <div className="container">
          <div className="header">
            <p style={{ color: '#ff6600' }}>{query === "now_playing" ? "now playing" : query}</p>
          </div>
          <div className="row">
            {movies &&
              movies.map(movie =>
                <div className="col-6 my-2 card-stack" style={{ display: 'flex' }}>
                  <Image posterPath={movie.poster_path} />
                  <Card key={movie.id} movie={movie} />
                </div>
              )
            }

          </div>
          <Pagination
            pageCount={pageCount}
            loadMoreMovies={this.handleLoadMoreMovies}
          />
        </div>
        <div>
          <nav className="navbar navbar-light bg-light">
            <a href="https://www.themoviedb.org/" target="_blank">The Movie DB API</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
