import React, { Component } from "react";

class Tracks extends Component {



    render() {


        if (this.props.tracks.length > 0) {
           
            return (

                <div className="row">
                    {this.props.tracks.map((track => this.displayTrack(track)))}
                </div>
            );
        } else {
            return <div></div>
        }
    }

    componentDidUpdate(){
        console.log('update Tracks');
    }
    displayTrack(track) {
        return (<div className="col-12 bg-light my-2 rounded py-3" key={track.id}>
            <h4>{track.name}</h4>
            { track.preview_url ? <a className="btn btn-outline-danger" href={track.preview_url}>Play Preview</a> :<span> No Preview</span>}
        </div>)
    }

}

export default Tracks;