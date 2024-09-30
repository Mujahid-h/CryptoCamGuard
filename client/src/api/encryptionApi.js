import axios from "axios";

BASE_URL = " https://cryptocamguard.azurewebsites.net/api";

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
