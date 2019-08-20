import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

const login = props => {
  return (
    <View>
      <Input
        placeholder="Name"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Input
        placeholder="Username"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Input
        placeholder="Email"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  MainText: {}
});
export default login;
