import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";

class Form extends React.Component {
  state = {
    name: ""
  };
  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <Input
          style={styles.nameInput}
          placeholder="Username"
          onChangeText={text => {
            this.setState({
              name: text
            });
          }}
          value={this.state.name}
          marginLeft={20}
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <TouchableOpacity>
          <Button
            title="Next"
            style={styles.btnText}
            onPress={() => {
              Actions.chat({
                name: this.state.name
              });
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 20
  },
  btnText: {
    paddingTop: 60
  }
});
export default Form;
