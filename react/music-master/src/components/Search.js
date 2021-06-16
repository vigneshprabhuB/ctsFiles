import React, { Component } from "react";
const SEARCH_ARTIST = "https://spotify-api-wrapper.appspot.com/artist/"; //artist name


class Search extends Component {

    state = { "searchQuery": '' }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="mt-0 mx-auto mt-5">
                        <h1> Music Master</h1>
                        <input onChange={this.getArtist.bind(this)}></input><button onClick={this.searchForArtist.bind(this)}>Search</button>
                    </div></div>
            </div>
        )
    }

    getArtist(event) {

        this.setState({ "searchQuery": event.target.value });
    }
    searchForArtist() {
        this.props.searchForArtist(this.state.searchQuery);

    }

}

export default Search;