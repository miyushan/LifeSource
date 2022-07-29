import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Inside</Text>
    <Image style={styles.logo}
      source={require('@expo/snack-static/react-native-logo.png')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: "linear-gradient(#e66465, #9198e5)",
  },
  logo: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;