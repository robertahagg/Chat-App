import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import InfoCard from "./InfoCard";
import InfoCardBtn from "./InfoCardBtn";

const MainBackground = props => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Text style={styles.MainText}>WeTech</Text>
      <InfoCardBtn onGetPortfolio={this.showPortfolioHandler} />
      <InfoCard />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  MainText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 100,
    paddingTop: 150,
    textAlign: "center"
  }
});

export default MainBackground;
