import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight= Dimensions.get("window").height;

type ResponsiveImageProps = { 
  imageSource: any;
};

export default function ResponsiveImage({imageSource}: ResponsiveImageProps) {
  const isMobile = windowWidth < 600; // Adjust breakpoint if needed

  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        style={[
          styles.image,
          isMobile ? styles.mobileImage : styles.webImage,
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    aspectRatio: 2000 / 1333, // Maintains aspect ratio
    resizeMode: "contain",
  },
  mobileImage: {
    width: "100%", // Smaller image for mobile
    height: undefined, // Allow aspect ratio to adjust
  },
  webImage: {
    width: windowWidth * 0.9, // Larger image for web
    height: (windowWidth * 0.9) / (2000/1333), // Adjust as needed
  },
});
