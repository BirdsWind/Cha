import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const PuEr = require('../assets/images/puer.png'); 
const Matcha = require('../assets/images/matcha.png');
const BaiCha = require('../assets/images/baicha.png'); 

const windowWidth = Dimensions.get("window").width;
const isMobile = windowWidth < 600; // Adjust breakpoint if needed

const products = [
  { name: "Matcha", description: "Fint stenmalet grönt te. Djup umami och fyllig gräsighet.", image: Matcha },
  { name: "Vitt te-pulver", description: "För Song Dian Cha. Lätt, mild smak med subtil sötma.", image: BaiCha },
  { name: "Pu-erh 2014", description: "Lagrad, jordig doft med inslag av torkad frukt och mossa.", image: PuEr },
];

export default function ProductGallery() {
  return (
    <View style={[styles.flexImageContainer, isMobile ? styles.column : styles.row]}>
      {products.map((product, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={product.image} style={styles.image} />
          <View style={styles.textOverlay}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  flexImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    margin: 10,
  },
  image: {
    width: isMobile ? windowWidth * 0.9 : (windowWidth - 80) / 3,
    height: isMobile ? (windowWidth * 0.9) * (320 / 480) : ((windowWidth - 80) / 3) * (320 / 480),
    borderRadius: 10,
  },
  textOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent black overlay
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 10,
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