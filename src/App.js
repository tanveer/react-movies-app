import React, { Component } from 'react';
import Card from './components/card';
import Navbar from './components/navbar'
import Image from './components/image'
import Pagination from './components/pagination'
import { key, discoverUrl } from './util/api'



class App extends Component {

  state = {
    currentPage: 1,
    query: '',
    movies: [],
    pageCount: 0,
    offset: 0,
    countPerPage: 25
  }

  componentDidMount() {
    this.discoverMovies()
  }

  discoverMovies = async () => {
    const { currentPage, totlaPage } = this.state
    const url = `${discoverUrl}api_key=${key}&page=${currentPage}`
    const response = await fetch(url)
    const json = await response.json()
    if (json.results) {
      const pageCount = Math.ceil(json.total_pages)
      this.setState({
        movies: [...json.results],
        pageCount: pageCount,
        currentPage: currentPage + 1
      })
    }
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
      currentPage } = this.state

    return (
      <div className="container">
        <div>
          <Navbar handleFetchRequest={this.handleFetchRequest} />
        </div>
        <div className="row" style={{ marginTop: 100 }}>
          {movies &&
            movies.map(movie =>
              <div className="col-md-6 my-2 main-card">
                <Card key={movie.id} movie={movie} />
              </div>
            )
          }
        </div>
        <Pagination
          pageCount={pageCount}
          countPerPage={countPerPage}
          loadMoreMovies={this.handleLoadMoreMovies}
        />
      </div>
    );
  }
}

export default App;
