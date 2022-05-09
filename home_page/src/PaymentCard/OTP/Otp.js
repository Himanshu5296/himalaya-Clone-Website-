// import './App.css';
import React from 'react';
import firebaseConfig from './firebase';
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
// import Home from './Home';

class Otp extends React.Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "www.youtube.com", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "https://calculator-qgnbku7zp-suyashmuley.vercel.app/"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <>
      <div id="firebaseui-auth-container"></div>
      </>
    )
  }
}

export default Otp;