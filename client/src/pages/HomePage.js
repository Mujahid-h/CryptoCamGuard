import React, { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import DefaultLayout from "../components/DefaultLayout";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CameraSvg from "../../images/camera.svg";
import * as ImagePicker from "expo-image-picker";
import { ImageContext } from "../context/ImageContext";

const HomePage = () => {
  const { selectedImage, setSelectedImage } = useContext(ImageContext);

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission Denied",
        "Gallery access is required to select images."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleCameraLaunch = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission Denied",
        "Camera access is required to take photos."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 5],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <DefaultLayout>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingTop: 30,
          paddingBottom: 70,
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 30,
            paddingTop: 10,
            borderWidth: 1,
            borderColor: "#fff",
            borderRadius: 20,
            gap: 10,
          }}
        >
          {selectedImage ? (
            <>
              <MaterialIcons
                name="cancel"
                style={{ marginLeft: "auto" }}
                size={24}
                color="red"
                onPress={() => setSelectedImage(null)}
              />
              <Image
                source={{ uri: selectedImage }}
                style={{ width: 200, height: 250, borderRadius: 10 }}
                resizeMode="contain"
              />
            </>
          ) : (
            <CameraSvg width={250} height={300} />
          )}
        </View>

        <View style={{ gap: 20 }}>
          {selectedImage ? (
            <>
              <TouchableOpacity
                style={styles.buttons}
                // onPress={handleCameraLaunch}
              >
                <AntDesign name="download" size={24} color="white" />
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                // onPress={openImagePicker}
              >
                <MaterialCommunityIcons
                  name="security"
                  size={24}
                  color="white"
                />
                <Text style={styles.buttonText}>Encrypt and save</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.buttons}
                onPress={handleCameraLaunch}
              >
                <AntDesign name="camerao" size={24} color="white" />
                <Text style={styles.buttonText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={openImagePicker}
              >
                <AntDesign name="upload" size={24} color="white" />
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#0a6c76",
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#fff",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default HomePage;
