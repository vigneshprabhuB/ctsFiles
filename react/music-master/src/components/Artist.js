import React, { Component } from "react";
import { connect } from 'react-redux';

class Artist extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    {this.props.artistList.map(artist => (this.singleArtist(artist)))}
                </div></div>

        )
    }

    componentDidUpdate() {
        console.log('update Artist' + this.state);
    }


    singleArtist(artist) {

        return (<div className="col-6" key={artist.id}>

            <div className="col-6" >
                <h1>{artist.name}</h1>
                <img className="img-fluid rounded" src={artist.images[0].url}></img>
                         This is from artist {this.props.count}
                <button onClick={this.props.decrease}> Decrease</button>
                <button onClick={this.props.increase}> increase</button>

            </div>
        </div>
        )
    }





}

export default connect((state) => { return { "count": state.count, "value": state.value }; },
   (dispatch)=> {
        decrease: () => {
            return { "type": "SUB_CLICK" };

        };
        increase: () => {
            return { "type": "ADD_CLICK" };
        };
    }
)(Artist);
