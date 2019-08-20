import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import * as firebase from "firebase";
import "firebase/firestore";

class Chat extends React.Component {
  state = {
    messages: [
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any"
        }
      }
    ]
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={message => {
          this.sendMessage(message);
        }}
        user={{
          _id: 1
        }}
      />
    );
  }

  sendMessage(message) {
    console.log(firebase);

    const firebaseConfig = {
      apiKey: "AIzaSyBg1td2gWXDdW2L6G0ofBdHYE29xdsRXB8",
      authDomain: "wetech-88ea0.firebaseapp.com",
      databaseURL: "https://wetech-88ea0.firebaseio.com",
      projectId: "wetech-88ea0"
    };

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();
    const hej = db.collection("room-events");

    hej.add({
      _id: 1,
      text: message,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "React Native",
        avatar: "https://placeimg.com/140/140/any"
      }
    });
  }
}

export default Chat;
