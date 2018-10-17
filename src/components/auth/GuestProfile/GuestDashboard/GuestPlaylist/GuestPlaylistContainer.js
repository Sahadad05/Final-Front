import React, { Component } from 'react';
import GuestPlaylistDisplay from '../GuestPlaylist/GuestPlaylistDisplay'

class GuestPlaylistContainer extends Component {
    

handleLogin() {
  if (this.state.token !== "") {
    this.setState({ loggedIn: true });
    this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);

    }
}

checkForPlayer() {
  const { token } = this.state;

  if (window.Spotify !== null) {
    clearInterval(this.playerCheckInterval);
    this.player = new window.Spotify.Player({
      name: "Matt's Spotify Player",
      getOAuthToken: cb => { cb(token); },
    });
    this.createEventHandlers();

    // finally, connect!
    this.player.connect();
  }
}


createEventHandlers() {
  this.player.on('initialization_error', e => { console.error(e); });
  this.player.on('authentication_error', e => {
    console.error(e);
    this.setState({ loggedIn: false });
  });
  this.player.on('account_error', e => { console.error(e); });
  this.player.on('playback_error', e => { console.error(e); });

  // Playback status updates
  this.player.on('player_state_changed', state => { console.log(state); });

  // Ready
  this.player.on('ready', data => {
    let { device_id } = data;
    console.log("Let the music play on!");
    this.setState({ deviceId: device_id });
  });
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