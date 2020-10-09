import React from "react";
import { View, StyleSheet } from "react-native";

// import { Container } from './styles';

const Block = ({ children }) => {
  return <View style={styles.block}>{children}</View>;
};

export default Block;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
