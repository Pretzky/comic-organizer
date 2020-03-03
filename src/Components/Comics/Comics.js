import React, { Component } from 'react';
import Parser from 'rss-parser';
import {
  ComicsWrapper
} from './style';
import ComicCard from './ComicCard';

class Comics extends Component {
  state = { feeds: [] }
  componentDidMount() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    let parser = new Parser();
    this.props.comics.forEach(comic => {
      if (comic.rss !== "") {
        parser.parseURL(CORS_PROXY + comic.rss).then(r => {
          if (r) {
            let newFeed = r;
            newFeed.schedule = comic.schedule;
            newFeed.userTitle = comic.title;
            let newFeeds = this.state.feeds;
            newFeeds.push(newFeed);
            this.setState({ feeds: newFeeds });
          }
        });
      }
    });
  }

  render() {
    if (this.props.comics[0]) {
      if (this.state.feeds[0]) {
        return (
          <ComicsWrapper>
            {this.state.feeds.map((feed, i) => {
              if (feed.items) {
                return (
                  <ComicCard key={i} item={feed.items[0]} image={feed.image.url} schedule={feed.schedule} title={feed.userTitle} />
                );
              }
              else return null;
            })}
          </ComicsWrapper>
        );
      }
      else {
        return (
          <ComicsWrapper>
            Loading...
          </ComicsWrapper>
        );
      }
    }
    else {
      return (
        <ComicsWrapper>
          No comics to load. Upload your settings in the 'download' page or build your settings in the 'settings' page!
        </ComicsWrapper>
      );
    }
  }
}

export default Comics;