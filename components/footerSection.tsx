import React from "react";
import { View, Text, Linking, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import useResponsive from '@/hooks/useResponsive';

export default function FooterSection() {
  const { isMobile, windowWidth } = useResponsive();

  return (
    <View style={[styles.container, isMobile && styles.mobilecontainer]}>
      {/* Left-aligned Copyright */}
      <View style={styles.leftItem}>
        <Text style={styles.copyright}>© 2025 Tea Ceremony Workshop</Text>
      </View>

      {/* Centered Contact (flex-based centering) */}
      <View style={styles.centerItem}>
        <TouchableOpacity onPress={() => Linking.openURL("mailto:humlelu@gmail.com")}>
          <Text style={styles.contact}>Kontakta mig för mer information</Text>
        </TouchableOpacity>
      </View>

      {/* Right-aligned Social Media */}
      <View style={styles.rightItem}>
        <TouchableOpacity onPress={() => Linking.openURL("http://instagram.com/humlelu")}>
          <FontAwesome name="instagram" size={24} color="#efefef" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Aligns left & right correctly
    width: "90%", // Scales dynamically
    paddingVertical: 20,
  },
  mobilecontainer: {  
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  leftItem: {
    flex: 1, // Pushes it to the left
    alignItems: "flex-start",
  },
  centerItem: {
    flex: 1, // Allows centering dynamically
    alignItems: "center",
  },
  rightItem: {
    flex: 1, // Pushes it to the right
    alignItems: "flex-end",
  },
  copyright: {
    color: "#efefef",
    fontSize: 16,
  },
  contact: {
    color: "#efefef",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});