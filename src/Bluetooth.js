import React , { Component } from 'react';

export default class Bluetooth extends Component {
  connectBluetooth = () => {
    console.log("HI")
    navigator.bluetooth.requestDevice({ 
      filters: [{ services: ['generic_access'] }] 
    })
    .then(device => { 
      console.log("Connected")
     })
    .catch(error => { console.log(error); });
  }
  
  render() {
    
    return(
      <div className="w3-container w3-white w3-card w3-padding-large" style={{}}>
        <div className="w3-content w3-center">
          <h1>
            Web Bluetooth Demo
          </h1>
          <hr className="w3-opacity" styles={{ borderTop: "2px solid black" }}/>
          <p>
            Click on the button below to check for bluetooth devices.
          </p>
          <button className="w3-button w3-blue" onClick={this.connectBluetooth}>
            Enable Bluetooth
          </button>
        </div>
      </div>
    );
  }
}