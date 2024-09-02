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
import Header from "./src/components/Header";
import Drawer from "./src/components/Drawer";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

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
        colors={["#0D1B2A", "#10E0F0"]}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1 }}
      >
        <Header onMenuPress={toggleDrawer} isDrawerOpen={isDrawerOpen} />
        <View style={styles.content}>
          <Login />
          {/* <Signup /> */}
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
    paddingTop: 100,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
});

export default App;
