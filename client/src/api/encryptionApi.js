import axios from "axios";

BASE_URL = "http://192.168.100.6:5269/api";

export const encryptImage = async (galleryPhotoId, encryptedKey, IV) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Encrypt?galleryPhotoId=${galleryPhotoId}&${encryptedKey}&${IV}`
    );
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching images", error);
    throw error;
  }
};
