import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
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
    <ScrollView>
      <Text>heres your results...</Text>
      <Text>you searched for: {searchValue}</Text>
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
  );
}
