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
import { login } from "../api/authApi";
import { LinearGradient } from "expo-linear-gradient"; // Correct import

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      const data = await login({ email, password });
      console.log(data);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinearGradient colors={["#0f2232", "#22a0ae"]} style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("../../images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>CryptoCamGuard</Text>
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.buttonText}>Create New Account</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from "react-native";
// import { login } from "../api/authApi";
// import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigation = useNavigation(); // Hook to get navigation instance

//   const handleSubmit = async () => {
//     if (email === "" || password === "") {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }

//     try {
//       const data = await login({ email, password });
//       console.log(data);
//       Alert.alert("Success", "Login successfully");
//       setEmail("");
//       setPassword("");
//       // Navigation or further actions after successful login
//     } catch (error) {
//       console.log(error);
//       Alert.alert("Error", "Login failed, please try again");
//     }
//   };

//   return (
//     <LinearGradient colors={["#0f2232", "#22a0ae"]} style={styles.container}>
//       <StatusBar style="auto" />
//       <Image source={require("../../images/logo.png")} style={styles.logo} />
//       <Text style={styles.title}>CryptoCamGuard</Text>
//       <TextInput
//         placeholder="Enter Email"
//         style={styles.input}
//         keyboardType="email-address"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         style={styles.input}
//         secureTextEntry
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         autoCapitalize="none"
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.createAccountButton}
//         onPress={() => navigation.navigate("SignUp")} // Navigate to SignUp screen
//       >
//         <Text style={styles.buttonText}>Create New Account</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#001f3f",
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#fff",
    marginBottom: 20,
  },
  createAccountButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#18757f",
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
