import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import List from "./List";

let data = [
  {
    title: "Shuffle syndrome",
    img: require("../assets/images/shuffle.jpg"),
    id: 1,
  },
  {
    title: "This is Dash Berlin",
    img: require("../assets/images/dashBerlin.jpg"),
    id: 2,
  },
  {
    title: "Lofi Beats",
    img: require("../assets/images/lofiBeats.jpg"),
    id: 3,
  },
  {
    title: "This Is Travis Scott",
    img: require("../assets/images/travis.jpg"),
    id: 4,
  },
  {
    title: "Video Game Soundtracks",
    img: require("../assets/images/videoGame.jpg"),
    id: 5,
  },
];

export default function Home() {
  return (
    <ScrollView
      style={[styles.container, { marginTop: Constants.statusBarHeight }]}
    >
      <Feather
        name="settings"
        size={24}
        color="white"
        style={styles.settingsIcon}
      />
      <List data={data} name="Tocadas recentemente" first={true} />
      <List data={data} name="Escute de novo" />
      <List data={data} name="Jazz in the background" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  settingsIcon: {
    color: "#FDFDFD",
    marginTop: 15,
    alignSelf: "flex-end",
  },
});
