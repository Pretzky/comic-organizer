import React, { Component } from 'react';
import {
  CardWrapper, ExternalLink
} from './style';

class ComicCard extends Component {
  render() {
    let title = ""
    if (this.props.title !== "") title = this.props.title;
    else title = this.props.item.title;

    const time = new Date(this.props.item.isoDate);
    const timeDiff = new Date(Date.now()).getTime() - time.getTime();
    const timeDiffInDays = timeDiff/24/60/60/1000;
    const timeDiffInHours = timeDiff/60/60/1000;
    const timeDiffInMinutes = timeDiff/60/1000;
    const timeDiffInSeconds = timeDiff/1000;
    const timeDiffs = [timeDiffInSeconds, timeDiffInMinutes, timeDiffInHours, timeDiffInDays];
    const timeLabels = ["seconds", "minutes", "hours", "days"];
    let correctDiff = "";
    timeDiffs.forEach((diff, i) => {
      if (diff >= 1) {
        correctDiff = Math.floor(diff) + " " + timeLabels[i];
        return;
      }
    })
    
    return (
      <CardWrapper>
        <div>
          <span>Uploaded {correctDiff} ago</span>
          <a href={this.props.item.link} target="_blank" rel="noopener noreferrer"><ExternalLink /></a>
        </div>
        <section>
          <img src={this.props.image} alt={this.props.item.title} height="100%" width="100%" />
        </section>
        <div>
          <span>{title}</span>
          <span>Uploads {this.props.schedule}</span>
        </div>
      </CardWrapper>
    );
  }
}

export default ComicCard;