import './App.css';
import { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './component/navbar';
import NewsItem from './component/newsItem';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container" style={{ position: 'relative' }}>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<NewsItem category="general" />} />
              <Route path="/category/entertainment" element={<NewsItem category="entertainment" />} />
              <Route path="/category/politics" element={<NewsItem category="politics" />} />
              <Route path="/category/sports" element={<NewsItem category="sports" />} />
              <Route path="/category/education" element={<NewsItem category="education" />} />
              <Route path="/category/economy" element={<NewsItem category="economy" />} />
              <Route path="/category/business" element={<NewsItem category="business" />} />
              <Route path="/category/technology" element={<NewsItem category="technology" />} />
              <Route path="/category/health" element={<NewsItem category="health" />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
