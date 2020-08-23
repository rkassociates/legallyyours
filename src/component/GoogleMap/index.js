import React, { Component } from "react";
// import { GoogleMap, Marker, isMarkerShown } from "react-google-maps"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GMap extends Component {
    render() {
        const { isMarkerShown } = this.props;
        return (
            <div>
                Google Map
                {/* <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                >
                    {isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
                </GoogleMap> */}
                <Map google={this.props.google} zoom={14}>
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            {/* <h1>{this.state.selectedPlace.name}</h1> */}
                            <h1>SelectedPlace Name</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCBxXN1Q7055zN0cdH33tvnXvZfEZEI02M")
  })(GMap);