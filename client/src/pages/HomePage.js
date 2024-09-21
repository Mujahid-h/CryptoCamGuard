import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DefaultLayout from "../components/DefaultLayout";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { ImageContext } from "../context/ImageContext";
import Camera from "../../images/camera.png";
import { uploadImagesWithIds } from "../api/imageApi";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";

const HomePage = () => {
  const { selectedImage, setSelectedImage } = useContext(ImageContext);
  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.data?.id;

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Toast.show({
        type: "error",
        text1: "Permission Denied",
        text2: "Gallery access is required to select images.",
      });
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
      Toast.show({
        type: "error",
        text1: "Permission Denied",
        text2: "Camera access is required to take photos.",
      });
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

  const handleUpload = async () => {
    if (selectedImage) {
      try {
        const imageToUpload = {
          uri: selectedImage,
          type: "image/jpeg",
          fileName: "photo.jpg",
        };
        const response = await uploadImagesWithIds(imageToUpload, userId);
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Image uploaded successfully.",
        });
        setSelectedImage(null);
        console.log("Upload response:", response);
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Failed to upload the image.",
        });
        console.error(error);
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "No image selected.",
      });
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
            <Image
              source={Camera}
              style={{ width: 200, height: 250, borderRadius: 10 }}
              resizeMode="contain"
            />
          )}
        </View>

        <View style={{ gap: 20 }}>
          {selectedImage ? (
            <>
              <TouchableOpacity style={styles.buttons} onPress={handleUpload}>
                <AntDesign name="download" size={24} color="white" />
                <Text style={styles.buttonText}>Save</Text>
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
