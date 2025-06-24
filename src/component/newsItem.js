import React, { Component } from 'react';
import data from './semple.json';
import Spinner from './spinner';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      articlesPerPage: 12,
      loadingImages: [], // store index of loading images
    };
  }

  componentDidMount() {
    this.initializeImageLoading();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.initializeImageLoading();
    }
  }

  initializeImageLoading = () => {
    const { currentPage, articlesPerPage } = this.state;
    const startIndex = (currentPage - 1) * articlesPerPage;
    const indexes = Array.from({ length: articlesPerPage }, (_, i) => startIndex + i);
    this.setState({ loadingImages: indexes });
  };

  handleImageLoad = (index) => {
    this.setState((prevState) => ({
      loadingImages: prevState.loadingImages.filter((i) => i !== index),
    }));
  };

  handleNextPage = () => {
    const { currentPage, articlesPerPage } = this.state;
    const totalPages = Math.ceil(data.articles.length / articlesPerPage);
    if (currentPage < totalPages) {
      this.setState({ currentPage: currentPage + 1 });
    }
  };

  handlePrevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  render() {
    const { currentPage, articlesPerPage, loadingImages } = this.state;
    const startIndex = (currentPage - 1) * articlesPerPage;
    const currentArticles = data.articles.slice(startIndex, startIndex + articlesPerPage);

    return (
      <div className="container my-5">
        <div className="row">
          {currentArticles.map((article, i) => {
            const globalIndex = startIndex + i;
            const isLoading = loadingImages.includes(globalIndex);

            return (
              <div className="col-md-4 mb-4" key={globalIndex}>
                <div className="card shadow-sm border-0 rounded-4 h-100">
                  <div className="position-relative" style={{ height: '200px' }}>
                    {isLoading && (
                      <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 z-2">
                        <Spinner />
                      </div>
                    )}
                    <img
                      src={article.urlToImage || "https://via.placeholder.com/400x200.png?text=No+Image"}
                      className="card-img-top rounded-top-4"
                      alt="News Thumbnail"
                      style={{ height: '200px', objectFit: 'cover' }}
                      onLoad={() => this.handleImageLoad(globalIndex)}
                    />
                    <span
                      className="badge bg-primary position-absolute top-0 start-0 m-2 rounded-pill px-3 py-2"
                      style={{ fontSize: '0.8rem' }}
                    >
                      {article.source.name}
                    </span>
                  </div>

                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title fw-bold">{article.title || "Untitled News"}</h5>
                    <p className="card-text text-muted">
                      {article.description || "No description available."}
                    </p>

                    <p className="card-text mt-auto">
                      <small className="text-secondary">
                        By <strong>{article.author || "Unknown"}</strong> on{" "}
                        {article.publishedAt
                          ? new Date(article.publishedAt).toLocaleString(undefined, {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                          : "Unknown date"}
                      </small>
                    </p>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark btn-sm mt-2"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       {/* Pagination Controls */}
<div className="d-flex justify-content-between align-items-center mt-4">
  <button
    className="btn btn-secondary"
    onClick={this.handlePrevPage}
    disabled={this.state.currentPage === 1}
  >
    ← Previous
  </button>

  <div className="text-muted">
    Page {currentPage} / {Math.ceil(data.articles.length / articlesPerPage)}
  </div>
 
  <button
    className="btn btn-secondary"
    onClick={this.handleNextPage}
    disabled={
      this.state.currentPage ===
      Math.ceil(data.articles.length / this.state.articlesPerPage)
    }
  >
    Next →
  </button>
</div>

      </div>
    );
    
  }
}
