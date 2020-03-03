import React, { Component } from 'react';
import {
  DownloadWrapper, DownloadButton, UploadInput, UploadWrapper, CheckMark
} from './style';

class Download extends Component {
  state = { complete: false }

  download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  upload(e) {
    var reader = new FileReader();
    reader.onload = (event) => {
      this.props.setUser(JSON.parse(event.target.result));
      this.setState({ complete: true });
    }
    reader.readAsText(e.target.files[0]);
  }

  render() {
    console.log(this.state.complete);
    return (
      <DownloadWrapper>
        <DownloadButton onClick={() => this.download("comicSettings.json", JSON.stringify(this.props.user))}>Download Your Settings</DownloadButton>
        <span>Upload Your Settings</span>
        <UploadWrapper>
          <UploadInput type="file" onChange={e => this.upload(e)} />
          {this.state.complete && <CheckMark />}
        </UploadWrapper>
      </DownloadWrapper>
    );
  }
}

export default Download;