import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePressText = () => console.log("Text pressed");
  const handlePressImage = () => console.log("Nice image");

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePressText}>I love React damn ❤!</Text>
      <TouchableWithoutFeedback onPress={handlePressImage}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
        />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
