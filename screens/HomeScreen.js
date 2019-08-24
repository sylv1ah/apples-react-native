import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  View
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [value, setValue] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>hungry for apples</Text>
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
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30
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
