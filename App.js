import { StatusBar } from "expo-status-bar";

import React from "react";
import { StyleSheet, View } from "react-native";

import Home from "./components/Home";
import MiniPlayer from "./components/MiniPlayer";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#111" />
      <Home />
      <MiniPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
});
