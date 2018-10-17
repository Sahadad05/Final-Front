import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"


const API_KEY = "AIzaSyD0iBJ86eZUGkhbuWhS7b4_B3-8cRYQgTQ"

class GoogleSuggest extends React.Component {
  state = {
    search: "",
    value: "",
    location:{},
    category:{}
  }

  handleInputChange(e) {
    this.setState({search: e.target.value, value: e.target.value})
  }

  handleSelectSuggest(suggest) {
    console.log(suggest)
    this.setState({search: "", value: suggest.formatted_address})
  }

  render() {
    const {search, value} = this.state
    return (
   
      <ReactGoogleMapLoader
        params={{
          key: API_KEY,
          libraries: "places,geocode",
        }}
        render={googleMaps =>
          googleMaps && (
            <div >
              <ReactGooglePlacesSuggest
                autocompletionRequest={{input: search}}
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest.bind(this)}
              >
              <form>
              <span uk-search-icon="true"></span>
                <input
                  type="text"
                  value={value}
                  placeholder="Dirección"
                  onChange={this.handleInputChange.bind(this)}
                />

                < input
                type="submit"
                value="Buscar"
                onClick={this.redirect}
                />
              </form>
              </ReactGooglePlacesSuggest>
              </div>
          )
        }
      />
      
    )
  }
}



export default GoogleSuggest