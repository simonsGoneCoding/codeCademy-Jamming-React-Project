import React, { Component } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/PlayList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: "AAAAA",
          artist: "AAAAA",
          album: "AAAAA",
          id: 1,
        },
        {
          name: "BBBBB",
          artist: "BBBBB",
          album: "BBBBB",
          id: 2,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
