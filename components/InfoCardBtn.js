import React from "react";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

const infoCardBtn = props => {
  return (
    <TouchableOpacity>
      <Button
        title="Find Tech programs and events"
        onPress={() => {
          Actions.login();
        }}
      />
    </TouchableOpacity>
  );
};

export default infoCardBtn;
