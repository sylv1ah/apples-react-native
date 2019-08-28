import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default function BackgroundImage(props) {
  return (
    <Image
      source={require("../assets/images/galaxy.jpg")}
      style={styles.backgroundImage}
    />
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "repeat",
    height: "100%",
    flex: 1
  }
});
