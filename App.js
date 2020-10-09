import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Block from "./components/Block";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Block>
        <View>
          <Text style={styles.h1}>Tocadas recentemente</Text>
          <View style={styles.list}>{/* <FlatList /> */}</View>
        </View>
      </Block>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
