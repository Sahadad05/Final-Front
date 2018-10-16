import React, { Component } from 'react';
import GuestPlaylistDisplay from '../GuestPlaylist/GuestPlaylistDisplay'

class GuestPlaylistContainer extends Component {

handleLogin() {
  if (this.state.token !== "") {
    this.setState({ loggedIn: true });
    }
}

checkForPlayer() {
  const { token } = this.state;

  if (window.Spotify !== null) {
    this.player = new window.Spotify.Player({
      name: "Matt's Spotify Player",
      getOAuthToken: cb => { cb(token); },
    });
    // this.createEventHandlers();

    // finally, connect!
    this.player.connect();
  }
}

render () {
 
  
  
return (
  <div>
    <GuestPlaylistDisplay checkForPlayer={this.checkForPlayer}/>
  </div>
    )
  }
}


export default GuestPlaylistContainer