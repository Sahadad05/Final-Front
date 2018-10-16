import React, {Component} from 'react'
import MapLocationDisplay from './MapLocationDisplay'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';


class GoogleMapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '50%',
      height: '50%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      position:'relative'
    }
    return (
      <div>
        <MapLocationDisplay />

      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 40.648307, lng: -85.711185 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 40.648307, lng: -85.711185 }}
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <div>
            <div
              variant = 'headline'
              component = 'h4'
            >
              Changing Colors Garage
            </div>
            <div
              component = 'p'
            >
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </div>
          </div>
        </InfoWindow>
      </Map>
      
</div>

    )
  }
}
export default GoogleApiWrapper({
api: (process.env.API_KEY)
})(GoogleMapsContainer)