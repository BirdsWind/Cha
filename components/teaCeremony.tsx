import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";

import ResponsiveImage from "@/components/sadouImage";

const windowWidth = Dimensions.get("window").width;

export default function WorkshopDetails() {
    const isMobile = windowWidth < 600; // Adjust breakpoint as needed
  return (
      <View style={isMobile ? styles.mobileContainer : styles.webContainer}>
        <Text style={styles.title}>Workshop i teceremoni</Text>
        <Text style={styles.paragraph}>
          Delta i vår unika workshop i teceremoni, där tradition möter det moderna livet. 
        </Text>
        <Text style={styles.subtitle}>Under workshopen får du:</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Lära dig tekniker</Text> för att skapa en krämig tea latte hemma.
          </Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Utforska</Text> de hälsofrämjande och helande egenskaperna hos dessa teer.
          </Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Njuta</Text> av de goda och hälsosamma smakerna från handgjorda teblandningar.
          </Text>
        </View>
        <Text style={styles.paragraph}>
          Höj din tekonst och skapa en stund av lugn i vardagen. Perfekt för både teälskare och nybörjare!
        </Text>
        <ResponsiveImage />
        <Text style={styles.callToAction}>Boka din plats idag!</Text>
      </View>
   
  );
}

const styles = StyleSheet.create({
    webContainer: {
      flexGrow: 1,
      paddingHorizontal: 40,
      paddingVertical: 16,
      alignSelf: 'center', // Center horizontally
      width: '100%', // Full width of screen
      maxWidth: 600, // Limit width on larger screens
    },
    mobileContainer: {
      flexGrow: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,
      alignSelf: 'center',
      width: '100%',
      maxWidth: 400, // Limit width on smaller devices
    },
    container: {
      alignItems: 'flex-start',
      width: '100%',
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      marginTop: 10,
      textAlign: "center", // Center title
    },
    paragraph: {
      fontSize: 16,
      marginBottom: 10,
      textAlign: "justify", // Better text alignment
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
    },
    bulletContainer: {
      marginLeft: 16,
      marginBottom: 10,
    },
    bullet: {
      fontSize: 16,
      marginBottom: 5,
      textAlign: "justify",
    },
    bold: {
      fontWeight: "bold",
    },
    callToAction: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
      textAlign: "center",
    },
  });