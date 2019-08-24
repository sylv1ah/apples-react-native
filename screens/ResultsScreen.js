import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

export default function ResultsScreen(props) {
  const [characterList, setCharacterList] = React.useState([]);
  const { navigation } = props;
  let searchValue = navigation.getParam("value");
  let url = `https://rickandmortyapi.com/api/character/?name=${searchValue}`;

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      console.log(result.data);
      setCharacterList(result.data.results);
    };

    fetchData();
  }, []);
  characterList.map(char => {
    console.log(char.name);
  });
  return (
    <View>
      <Text>heres your results...</Text>
      <Text>you searched for: {searchValue}</Text>
      {characterList.map(char => {
        return <Text key={char.id}>{char.name}</Text>;
      })}
    </View>
  );
}
