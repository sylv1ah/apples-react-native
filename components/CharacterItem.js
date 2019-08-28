import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";

export default function CharacterItem(props) {
  const { image, species, location, origin, episodes } = props;
  const [episodeFormatted, setEpisodeFormatted] = React.useState([]);

  React.useEffect(() => {
    episodes.map(ep => {
      const fetchData = async () => {
        const result = await axios(ep);
        nextEp = {
          episode: result.data.episode,
          name: result.data.name,
          url: result.data.url
        };
        setEpisodeFormatted(prevArr => [...prevArr, nextEp]);
      };
      fetchData();
    });
  }, []);

  console.log("episodeFormatted>>>>>>>>:", episodeFormatted);
  episodeFormatted.map(ep => {
    console.log("map outside return:", ep.name);
  });

  return (
    <View style={styles.container}>
      <Text {...props} />
      <Image source={{ uri: image }} style={{ width: 400, height: 400 }} />
      <Text>Species: {species}</Text>
      <Text>Location: {location}</Text>
      <Text>Origin: {origin}</Text>
      <Text>Episodes: </Text>
      {episodeFormatted.map(ep => {
        return (
          <Text key={ep.url}>
            {ep.episode}: {ep.name}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAC016"
  }
});
