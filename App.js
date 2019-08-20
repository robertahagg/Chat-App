import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import * as firebase from "firebase";

import Form from "./components/Form";
import Chat from "./components/Chat";
import Home from "./components/Home";
import Login from "./components/Login";

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
