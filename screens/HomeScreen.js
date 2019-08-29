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

export default function HomeScreen({ navigation }) {
  const [value, setValue] = React.useState("");
  return (
    <ImageBackground
      source={require("../assets/images/galaxy.jpg")}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>hungry for apples</Text>
        <Text style={styles.subTitle}>Rick and Morty Character Search</Text>
        <View style={styles.searchForm}>
          <Image source={require("../assets/images/greenorb.png")} />
          <TextInput
            style={styles.searchInput}
            placeholder=" search for character..."
            onBlur={Keyboard.dismiss}
            value={value}
            onChangeText={value => setValue(value)}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Results", { value })}
            style={styles.searchButton}
          >
            <View>
              <Text>🔍</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.handle} />
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
  title: {
    fontFamily: "roiland",
    fontSize: 50,
    textAlign: "center",
    color: "red"
  },
  subTitle: {
    color: "white",
    fontFamily: "techmono",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
    width: "100%"
  },
  inner: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    width: "90%",
    height: "80%"
  },
  searchForm: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#E7E0DB",
    height: "55%",
    width: "90%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  searchInput: {
    fontFamily: "techmono",
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    width: "80%",
    fontSize: 20,
    color: "white"
  },
  searchButton: {
    backgroundColor: "grey",
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  handle: {
    backgroundColor: "#E7E0DB",
    alignItems: "center",
    width: "30%",
    height: "20%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50
  }
});
