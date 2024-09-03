import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Correct import

const Slider = () => {
  return (
    <LinearGradient
      colors={["#0D1B2A", "#10E0F0"]}
      style={styles.container}
      start={{ x: 0.5, y: 0.3 }}
      end={{ x: 0.5, y: 1 }}
    >
      <StatusBar style="auto" />
      <Image source={require("../../images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>CryptoCamGuard</Text>

      <TouchableOpacity>
        <Text style={styles.paragraph}>
          CryptoCamGuard provides top-tier security with advanced encryption,
          ensuring your footage is always protected and private. Receive
          real-time alerts for suspicious activities and integrate seamlessly
          with existing security systems. Enjoy reliable storage options on the
          cloud or local encrypted drives, keeping your data safe and accessible
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.buttonText}>Start Here</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "black",
    marginHorizontal: "auto",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    marginHorizontal: "auto",
    height: 40,
    backgroundColor: "#0d1b2a",
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 26,
  },

  createAccountButton: {
    width: "50%",
    marginHorizontal: "auto",
    height: 50,
    backgroundColor: "#0a6c76",
    borderRadius: 20,
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    color: "#fff",
    marginBottom: 20,
    marginTop: 20,
    width: 304,
    fontSize: 14,
    height: 160,
    textAlign: "center",
  },
});

export default Slider;
