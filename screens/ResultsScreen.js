import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground
} from "react-native";
import axios from "axios";

import CharacterItem from "../components/CharacterItem";

export default function ResultsScreen(props) {
  const [characterList, setCharacterList] = React.useState([]);
  const { navigation } = props;
  let searchValue = navigation.getParam("value");
  let url = `https://rickandmortyapi.com/api/character/?name=${searchValue}`;

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      // stretch: get the info.pages and get all results not just the first page of results
      console.log(result.data);
      setCharacterList(result.data.results);
    };

    fetchData();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/galaxy.jpg")}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.title}>
          you searched for:{" "}
          <Text style={styles.searchedValue}>{searchValue}</Text>
        </Text>
        {characterList.map(char => {
          return (
            <CharacterItem
              key={char.id}
              image={char.image}
              species={char.species}
              location={char.location.name}
              origin={char.origin.name}
              episodes={char.episode}
            >
              {char.name}
            </CharacterItem>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: "techmono",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    margin: 20
  },
  searchedValue: {
    backgroundColor: "green"
  }
});
