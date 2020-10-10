import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function List(props) {
  const { name, data, first } = props;

  const containerStyle = [
    styles.container,
    first && { marginTop: Constants.statusBarHeight * 4 },
  ];

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
      <View style={styles.playListContainer}>
        <Image style={styles.playlistImg} source={item.img} />
        <Text style={styles.h2}>{item.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    marginTop: 15,
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
    fontSize: 16,
    fontWeight: "bold",
  },

  playlistImg: {
    width: 180,
    height: 180,
  },
});
