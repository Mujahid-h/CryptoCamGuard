import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";

export default function App() {
  return (
    <Login />
    // <SignUp />
  );
}




