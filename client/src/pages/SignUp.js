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
import { LinearGradient } from "expo-linear-gradient";
import { register } from "../api/authApi";
import Toast from "react-native-toast-message";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (fullName === "" || email === "" || mobile === "" || password === "") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill in all fields",
      });
      return;
    }

    try {
      const data = await register({ fullName, email, mobile, password });

      // Success toast message
      Toast.show({
        type: "success",
        text1: "Signup Success",
        text2: "You have signed up successfully!",
      });

      // Clear form fields
      setEmail("");
      setFullName("");
      setMobile("");
      setPassword("");
    } catch (error) {
      // Show error toast message if registration fails
      Toast.show({
        type: "error",
        text1: "Signup Failed",
        text2: error.message || "An error occurred. Please try again.",
      });
    }
  };

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
      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Mobile"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={(text) => setMobile(text)}
      />
      <TextInput
        placeholder="New Password"
        placeholderTextColor="#aaa"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AlreadyHaveAnAccount}>
        <Text style={styles.buttonText}>Already have an account?</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  logo: {
    width: 200,
    height: 200,
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
    backgroundColor: "#D9D9D9",
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
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  AlreadyHaveAnAccount: {
    width: "80%",
    marginHorizontal: "auto",
    height: 40,
    backgroundColor: "rgba(13, 27, 42, 0.3)",
    borderRadius: 20,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});

export default SignUp;
