import React from "react";

import { View, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

const welcome = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>UE ME FEELL james Native!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#346FFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default welcome;
