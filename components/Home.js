import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainBackground from "./MainBackground";
import Login from "./Login";
import InfoCardBtn from "./InfoCardBtn";

export default function Home() {
  showPortfolioHandler = () => {
    <Login />;
  };

  return (
    <View style={styles.container}>
      <MainBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <InfoCardBtn onGetPortfolio={this.showPortfolioHandler} />
      </MainBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bigBlue: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30
  }
});
