import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const PuEr = require('../assets/images/puer.png'); 
const Matcha = require('../assets/images/matcha.png');
const BaiCha = require('../assets/images/baicha.png'); 

const windowWidth = Dimensions.get("window").width;
const windowHeight= Dimensions.get("window").height;
const isMobile = windowWidth < 600; // Adjust breakpoint if needed

export default function ProductGallery() {
  const isMobile = windowWidth < 600; // Adjust breakpoint if needed

  return (
          <View style={[styles.flexImageContainer, isMobile ? styles.column : styles.row]}>
              <Image source={Matcha} style={styles.image} />
              <Image source={BaiCha} style={styles.image} />
              <Image source={PuEr} style={styles.image} />
          </View>
  );
}

const styles = StyleSheet.create({

  flexImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: windowWidth > 600 ? "row" : "column", // Row for larger screens, column for smaller
  },
  image: {
    width: isMobile ? windowWidth * 0.9 : (windowWidth - 80) / 3, // Dynamically adjust width to fit 3 images in a row
    height: isMobile ? windowWidth * 0.9 * (320 / 480 ) : ((windowWidth - 80) / 3) * (320 / 480 ), // Maintain aspect ratio
    margin: 10, // Add spacing between images
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap", 
    
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
});
