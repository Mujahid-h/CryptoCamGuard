import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, StyleSheet, Text } from "react-native";
import { fetchImagesWithIds } from "../api/imageApi";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { encryptImage } from "../api/encryptionApi";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo.data.id;
  const encryptedKey = userInfo.data.encryptionKey;
  const ivKey = userInfo.data.ivKey;

  useEffect(() => {
    const getImages = async () => {
      try {
        const imagesData = await fetchImagesWithIds(userId);
        console.log(imagesData[0]);
        setImages(imagesData);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load images.");
        setIsLoading(false);
      }
    };

    getImages();
  }, []);

  // const handleEncrypt = async () => {
  //   try {
  //     const response = await encryptImage(imagesData.id, encryptedKey, ivKey);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (isLoading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <DefaultLayout>
      <ScrollView contentContainerStyle={styles.container}>
        {images.length > 0 ? (
          images
            .filter((imageData) => imageData.isEncrypted === false)
            .map((imageData) => (
              <View key={imageData.id} style={styles.imageContainer}>
                <Image
                  source={{
                    uri: `data:${imageData.fileType};base64,${imageData.imageData}`,
                  }}
                  style={styles.image}
                />
                <View style={styles.imageDetails}>
                  <Text style={styles.imageId}>Image {imageData.id}</Text>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="image-off"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))
        ) : (
          <Text style={styles.noImagesText}>No images to display</Text>
        )}
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#333", // Dark background for contrast
  },
  image: {
    width: 120,
    height: 160,
    marginBottom: 10,
    resizeMode: "contain",
    borderRadius: 4,
  },
  imageDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 140,
  },
  imageId: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  loadingText: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  noImagesText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Gallery;
