// "AIzaSyBwXTl-ZOVGooxvO0x-1kJNeiKQPCo0img"
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import React, { Component } from 'react';
// import { Key } from './key' // 引入 API key
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


// Map
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 24.1505274,
      lng: 120.6504611
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBwXTl-ZOVGooxvO0x-1kJNeiKQPCo0img" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={24.1505274}
            lng={120.6504611}
            text={<IoLocationSharp style={{color:'red'}} />}
          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default SimpleMap;