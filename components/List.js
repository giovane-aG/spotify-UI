import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function List(props) {
  const { name, data } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{name}</Text>
      <View style={styles.list}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderPlayLists}
        />
      </View>
    </View>
  );

  function renderPlayLists({ item }) {
    return (
      <TouchableOpacity style={styles.playListContainer}>
        <Image style={styles.playlistImg} source={item.img} />
        <Text style={styles.h2}>{item.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    marginTop: 10,
  },

  playListContainer: {
    marginRight: 20,
  },

  h1: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
  },

  h2: {
    color: "#FFF",
    fontWeight: "bold",
    width: 140,
    overflow: "hidden",
  },

  list: {},

  playlistImg: {
    width: 140,
    height: 140,
  },
});
