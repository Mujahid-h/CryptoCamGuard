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
import { register } from "../api/authApi"; // Assume you have an API method for registration

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (fullName === "" || email === "" || mobile === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      const data = await register({ fullName, email, mobile, password });
      console.log(data);
      Alert.alert("Signup successfully");
      setEmail("");
      setFullName("");
      setMobile("");
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
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={{ color: "white" }}>Already have an account?</Text>
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
// import { LinearGradient } from "expo-linear-gradient";
// import { register } from "../api/authApi"; // Assume you have an API method for registration
// import { useNavigation } from "@react-navigation/native";

// const SignUp = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");

//   const navigation = useNavigation(); // Hook to get navigation instance

//   const handleSignUp = async () => {
//     if (fullName === "" || email === "" || mobile === "" || password === "") {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }

//     try {
//       const data = await register({ fullName, email, mobile, password });
//       console.log(data);
//       Alert.alert("Success", "Signup successfully");
//       setEmail("");
//       setFullName("");
//       setMobile("");
//       setPassword("");
//       navigation.navigate("Login"); // Navigate to Login screen
//     } catch (error) {
//       console.log(error);
//       Alert.alert("Error", "Signup failed, please try again");
//     }
//   };

//   return (
//     <LinearGradient colors={["#0f2232", "#22a0ae"]} style={styles.container}>
//       <StatusBar style="auto" />
//       <Image source={require("../../images/logo.png")} style={styles.logo} />
//       <Text style={styles.title}>CryptoCamGuard</Text>
//       <TextInput
//         placeholder="Full Name"
//         placeholderTextColor="#aaa"
//         style={styles.input}
//         value={fullName}
//         onChangeText={(text) => setFullName(text)}
//       />
//       <TextInput
//         placeholder="Email"
//         placeholderTextColor="#aaa"
//         style={styles.input}
//         keyboardType="email-address"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Mobile"
//         placeholderTextColor="#aaa"
//         style={styles.input}
//         keyboardType="phone-pad"
//         value={mobile}
//         onChangeText={(text) => setMobile(text)}
//       />
//       <TextInput
//         placeholder="New Password"
//         placeholderTextColor="#aaa"
//         style={styles.input}
//         secureTextEntry
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         autoCapitalize="none"
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Signup</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.createAccountButton}
//         onPress={() => navigation.navigate("Login")} // Navigate to Login screen
//       >
//         <Text style={{ color: "white" }}>Already have an account?</Text>
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

export default SignUp;
