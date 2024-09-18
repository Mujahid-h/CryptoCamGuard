import axios from "axios";

BASE_URL = "http://192.168.7.59:5269/api/GalleryPhotos";

export const fetchImagesWithIds = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}?userId=${userId}`);

    // console.log("Response Data: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching images", error);
    throw error;
  }
};

export const uploadImagesWithIds = async (image, userId) => {
  try {
    const formData = new FormData();

    // Append the file
    formData.append("file", {
      uri: image.uri,
      type: image.type || "image/jpeg",
      name: image.fileName || "photo.jpg",
    });

    // Append userId separately
    formData.append("userId", userId.toString());

    const response = await axios.post(BASE_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading image", error);
    throw error;
  }
};
