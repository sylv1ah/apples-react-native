import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  View,
  ImageBackground
} from "react-native";

import BackgroundImage from "../components/BackgroundImage";

export default function HomeScreen({ navigation }) {
  const [value, setValue] = React.useState("");
  return (
    <ImageBackground
      source={require("../assets/images/galaxy.jpg")}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text
          style={{
            fontFamily: "roiland",
            fontSize: 50,
            textAlign: "center",
            color: "red"
          }}
        >
          hungry for apples
        </Text>
        <TextInput
          placeholder=" search for character..."
          onBlur={Keyboard.dismiss}
          value={value}
          onChangeText={value => setValue(value)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Results", { value })}
        >
          <View>
            <Text>Search!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inner: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    width: "80%",
    height: "80%"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  }
});
