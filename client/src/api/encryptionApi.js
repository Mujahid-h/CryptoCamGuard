const BASE_URL = "https://cryptocamguard.azurewebsites.net/api/Photo/EncryptDecrypt";

export const encryptImage = async (formData) => {
  console.log(formData, "form");

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), 
    });

    console.log(response);

  

    const data = await response.json();
    console.log("Response Data: ", data);
    return data;
  } catch (error) {
    console.error("Error encrypting image", error);
    throw error;
  }
};
