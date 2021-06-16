import React, { Component } from 'react';
import 'isomorphic-fetch';
import Artist from "./components/Artist";
import Tracks from './components/Tracks';
import Search from './components/Search';
import { connect } from 'react-redux';
const SEARCH_ARTIST = "https://spotify-api-wrapper.appspot.com/artist/"; //artist name

class App extends Component {

    state = {
        "searchQuery": "",
        "artistList": [],
        "tracksList": [],
        "count": 0
    };
    componentDidUpdate() {
       
    }

    render() {

        return (
            <div className="container">
                <Search searchForArtist={this.searchForArtist.bind(this)}></Search>
                <Artist artistList={this.state.artistList} />
                <Tracks tracks={this.state.tracksList}></Tracks>
                <button onClick={this.increaseCount}> Increase Count</button>
                {this.props.count}
            </div>


        )
    }
    increaseCount = () => {
        this.props.addNote();
    }
    searchForArtist(searchQuery) {
        fetch(SEARCH_ARTIST + searchQuery)
            .then((response) => response.json())
            .then(json => {
                this.setState({ "artistList": json.artists.items });
            }).then(
                () => {

                    fetch("https://spotify-api-wrapper.appspot.com/artist/" + this.state.artistList[0].id + "/top-tracks")
                        .then(response => response.json())
                        .then(track => {
                            this.setState({ "tracksList": track.tracks });
                        })
                }
            );

    }




    getArtist(event) {
    
        this.setState({ "searchQuery": event.target.value });
    }



}
const mapStateToProps = (state) => {
    return {
        count: state.count, value: state.value
    };
};
export default connect(mapStateToProps, {
    addNote: (a) => {
        return { "type": "ADD_CLICK" }
    }

})(App);
