import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import MoviesPage from './components/movies/MoviesPage';
import AboutPage from './components/about/AboutPage';
import SeriesPage from './components/series/SeriesPage';
import ChannelssPage from './components/channels/ChannelsPage';

export default (
  <Route path="/" component={App}>
    <Route path="movies" component={MoviesPage} />  
    <Route path="series" component={SeriesPage} />
    <Route path="channels" component={ChannelssPage} />
  </Route>
);
