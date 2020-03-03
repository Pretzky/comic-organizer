import React, { Component } from 'react';
import {
  SettingsWrapper, ComicSettings, ComicSetting, PlusButton, PlusButtonWrapper
} from './style';

class Settings extends Component {
  state = { comics: this.props.user.comics }

  comicChange(i, part, e) {
    e.preventDefault();
    let newComics = this.state.comics;
    if (part === "title") {
      newComics[i].title = e.target.value;
    }
    else if (part === "rss") {
      newComics[i].rss = e.target.value;
    }
    else if (part === "schedule") {
      newComics[i].schedule = e.target.value;
    }
    this.props.setComics(newComics);
  }

  addComic(e) {
    e.preventDefault();
    console.log(this.state.comics);
    let newComics = this.state.comics;
    newComics.push({
      title: "",
      rss: "",
      schedule: ""
    });
    this.props.setComics(newComics);
  }

  render() {
    return (
      <SettingsWrapper>
        <ComicSettings>
          <span>Your Comics</span>
          {this.state.comics.map((comic, i) => {
            return (
              <ComicSetting key={i}>
                <label>Title: </label>
                <input type="text" value={comic.title} onChange={e => this.comicChange(i, "title", e)} />
                <label>RSS URL: </label>
                <input type="text" value={comic.rss} onChange={e => this.comicChange(i, "rss", e)} />
                <label>Upload Schedule: </label>
                <input type="text" value={comic.schedule} onChange={e => this.comicChange(i, "schedule", e)} />
              </ComicSetting>
            );
          })}
          <PlusButtonWrapper onClick={e => this.addComic(e)}>
            <PlusButton />
          </PlusButtonWrapper>
        </ComicSettings>
      </SettingsWrapper>
    );
  }
}

export default Settings;