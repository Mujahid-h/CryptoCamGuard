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
// import { LinearGradient } from "expo-linear-gradient"; // Correct import

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async () => {
//     if (email === "" || password === "") {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }

//     try {
//       const data = await login({ email, password });
//       console.log(data);
//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <LinearGradient colors={["#0D1B2A", "#10E0F0"]} style={styles.container} start={{x:0.5, y:0.3}} end={{x:0.5, y:1}}>
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
//       <TouchableOpacity style={styles.createAccountButton}>
//         <Text style={styles.buttonText}>Create New Account</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
  
//   },
//   logo: {
//     width: 250,
//     height: 250,
    
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 30,
//   },
//   input: {
//     width: "80%",
//     height: 35,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     color: "black",
//     marginHorizontal: "auto",
//     marginBottom: 20,
//   },
//   button: {
//     width: "80%",
//     marginHorizontal: "auto",
//     height: 40,
//     backgroundColor: "#0d1b2a",
//     borderRadius: 20,
//     marginTop: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
 
//   createAccountButton: {
//     width: "80%",
//     marginHorizontal: "auto",
//     height: 40,
//     backgroundColor: "#0d1b2a",
//     borderRadius: 20,
//     marginTop: 70,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   forgotPasswordText: {
//     color: "#fff",
//     marginBottom: 20,
//     marginTop: 20,
//   },
 
// });

// export default Login;


import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import { login } from "../api/authApi";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          {keyboardVisible && <View style={{ height: 100 }} />} {/* Placeholder View */}
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginBottom: 20,
  },
  button: {
    width: "80%",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountButton: {
    width: "80%",
    height: 40,
    backgroundColor: "#0d1b2a",
    borderRadius: 20,
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#fff",
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Login;


