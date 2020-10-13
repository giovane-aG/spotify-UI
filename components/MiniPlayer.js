import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import {} from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";

import albumPic from "../assets/images/videoGame.jpg";

const MiniPlayer = () => {
  const dimensions = Dimensions.get("window");
  const [playIcon, setPlayIcon] = React.useState("play");
  const [heartIcon, setHeartIcon] = React.useState("heart-o");

  return (
    <View style={[styles.container, { width: dimensions.width }]}>
      <View style={styles.albumContainer}>
        <Image style={styles.image} source={albumPic} />
        <View style={styles.albumNameContainer}>
          <Text style={styles.trackName}>God of War</Text>
          <Text style={styles.artistName}>Bear McCreary</Text>
        </View>
      </View>
      <FontAwesome
        name={heartIcon}
        size={20}
        onPress={toggleHeartIcon}
        color="#FDFDFD"
        style={styles.fontAwesome}
      />
      <FontAwesome
        name={playIcon}
        onPress={togglePlayIcon}
        size={20}
        color="#FDFDFD"
        style={styles.fontAwesome}
      />
    </View>
  );

  function togglePlayIcon() {
    if (playIcon == "play") {
      setPlayIcon("pause");
    } else {
      setPlayIcon("play");
    }
  }

  function toggleHeartIcon() {
    if (heartIcon == "heart") {
      setHeartIcon("heart-o");
    } else {
      setHeartIcon("heart");
    }
  }
};

export default MiniPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232323",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    bottom: 0,
  },
  albumContainer: {
    flexDirection: "row",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
  },
  albumNameContainer: {
    flex: 1,
    margin: 10,
  },
  trackName: {
    color: "#FDFDFD",
    fontWeight: "bold",
  },
  artistName: {
    color: "#FDFDFD",
  },
  fontAwesome: {
    marginHorizontal: 10,
  },
});
