import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import Login from "./src/pages/Login";
import Signup from "./src/pages/SignUp";
import Drawer from "./src/components/Drawer";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomePage from "./src/pages/HomePage";
import Header from "./src/components/Header";
import EncryptedImages from "./src/pages/EncryptedImages";
import Toast from "react-native-toast-message";
import Slider from "./src/pages/Slider";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <LinearGradient
        colors={["#074951", "#0e8d9c"]}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          <Header onMenuPress={toggleDrawer} />

          {/* <Login /> */}
          {/* <Signup /> */}
          <HomePage />
          {/* <Slider /> */}
          {/* <EncryptedImages /> */}
        </View>
        <Drawer isOpen={isDrawerOpen}>
          {/* Close button */}
          <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
            <Ionicons name="return-up-back" size={32} color="white" />
          </TouchableOpacity>

          {/* Drawer content */}
          <View>
            <Text>Drawer Item 1</Text>
            <Text>Drawer Item 2</Text>
            <Text>Drawer Item 3</Text>
          </View>
        </Drawer>
        <Toast />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
    // marginTop: 10,
  },
});

export default App;
