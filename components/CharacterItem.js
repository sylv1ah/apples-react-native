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

  return (
    <View style={styles.container}>
      <Text style={styles.title} {...props} />
      <View style={styles.portalContainer}>
        <Image
          source={require("../assets/images/portal3.png")}
          style={styles.portal}
        />
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text>
        <Text style={styles.infoTitle}>Species:</Text>
        <Text style={styles.infoText}> {species}</Text>
      </Text>
      <Text>
        <Text style={styles.infoTitle}>Location:</Text>
        <Text style={styles.infoText}> {location}</Text>
      </Text>
      <Text>
        <Text style={styles.infoTitle}>Origin:</Text>
        <Text style={styles.infoText}> {origin}</Text>
      </Text>
      <Text style={styles.infoTitle}>Episodes:</Text>
      {episodeFormatted.map(ep => {
        return (
          <Text key={ep.url} style={styles.infoText}>
            {ep.episode}: {ep.name}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    fontFamily: "roiland",
    fontSize: 30,
    textAlign: "center",
    color: "green"
  },
  portalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30
  },
  portal: {
    width: 300,
    height: 300,
    position: "absolute"
  },
  image: {
    flex: 1,
    width: 250,
    height: 250,
    borderRadius: 125
  },
  infoTitle: {
    color: "white",
    fontFamily: "techmono",
    backgroundColor: "red"
  },
  infoText: {
    color: "white",
    fontFamily: "techmono"
  }
});
