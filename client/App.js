import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import Drawer from "./src/components/Drawer";
import DrawerContent from "./src/components/DrawerContent";
import Toast from "react-native-toast-message";
import AppNavigator from "./AppNavigator";
import HomePage from "./src/pages/HomePage";
import { ImageProvider } from "./src/context/ImageContext";

const App = () => {
  return (
    <ImageProvider>
      <SafeAreaView style={styles.safeContainer}>
        <View style={[styles.content]}>
          <AppNavigator />
        </View>

        <Toast />
      </SafeAreaView>
    </ImageProvider>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },

  content: {
    flex: 1,
  },
});

export default App;
