import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import * as firebase from "firebase";
import "firebase/firestore";

class Chat extends React.Component {
  state = {
    messages: [
      /*       {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any"
        }
      } */
    ]
  };

  componentDidMount() {
    this.userId = Math.random();

    this.unsubscribe = firebase
      .firestore()
      .collection("room-events")
      .orderBy("createdAt")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          this.onNewMessage(change.doc.data());
          // if (change.type === "added") {
          console.log("Incoming: ", change.doc.data());
          //   }
        });
      });

    console.log(this.props.userName);
  }

  onNewMessage(message) {
    const messages = [message];

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  componentWillUnmount() {
    if (this.unsubscribe != null) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => {
          this.sendMessage(messages[0]);
        }}
        user={{
          _id: this.userId,
          name: this.props.userName
        }}
      />
    );
  }

  sendMessage(message) {
    console.log("sending: ", message);

    message.createdAt = message.createdAt.toJSON();
    console.log("actually sending: ", message);

    firebase
      .firestore()
      .collection("room-events")
      .add(message);
  }
}

export default Chat;
