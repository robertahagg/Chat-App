import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import * as firebase from "firebase";
import "firebase/firestore";

import Form from "./components/Form";
import Chat from "./components/Chat";
import Home from "./components/Home";
import Login from "./components/Login";

const firebaseConfig = {
  apiKey: "AIzaSyBg1td2gWXDdW2L6G0ofBdHYE29xdsRXB8",
  authDomain: "wetech-88ea0.firebaseapp.com",
  databaseURL: "https://wetech-88ea0.firebaseio.com",
  projectId: "wetech-88ea0"
};

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" style={{ paddingTop: 64 }}>
          <Scene key="home" component={Home} title="Home" />
          <Scene key="form" component={Form} title="Form" />
          <Scene key="login" component={Login} title="Login" />
          <Scene key="chat" component={Chat} title="Chat" />
        </Scene>
      </Router>
    );
  }
}
export default App;
