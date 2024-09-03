import React from "react";
import { View, StyleSheet } from "react-native";

const DefaultLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 120,
  },
});

export default DefaultLayout;
