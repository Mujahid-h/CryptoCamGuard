import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, StyleSheet, Text } from "react-native";
import { fetchImagesWithIds } from "../api/imageApi";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo.data.id;

  useEffect(() => {
    const getImages = async () => {
      try {
        const imagesData = await fetchImagesWithIds(userId);
        setImages(imagesData);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load images.");
        setIsLoading(false);
      }
    };

    getImages();
  }, []);

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
          // Filter images where isEncrypted is false before mapping them
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
                <Text style={styles.imageId}>Image {imageData.id}</Text>
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
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 200,
    margin: 10,
    resizeMode: "contain",
    borderRadius: 8,
  },
  imageId: {
    color: "#000",
    fontWeight: "bold",
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
