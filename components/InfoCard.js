import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Tile, Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";

const InfoCard = props => {
  return (
    <View>
      <Tile
        imageSrc={{
          url:
            "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }}
        title="WeTech for Women "
        featured
        caption="* Make connections, * Discover programming courses * Find Tech events * Create channels, * Share knowlege"
      />
      <TouchableOpacity>
        <Button
          title="Join WeTech chat  - make new connections!"
          onPress={() => {
            Actions.form({});
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InfoCard;
