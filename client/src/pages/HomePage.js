import React from "react";
import { Text, View } from "react-native";
import DefaultLayout from "../components/DefaultLayout";

const HomePage = () => {
  return (
    <DefaultLayout>
      <View>
        <Text>Welcome to the Home Page</Text>
        <Text>Zakir will work here</Text>
      </View>
    </DefaultLayout>
  );
};

export default HomePage;
