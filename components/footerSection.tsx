import React from "react";
import { View, Text, Linking, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import useResponsive from '@/hooks/useResponsive';

const { isMobile, windowWidth } = useResponsive(); // Use the hook

export default function FooterSection() {
  return (
    <View style={[styles.container, isMobile && styles.mobilecontainer]}>
      {/* Copyright Section */}
        <Text style={styles.copyright}>© 2025 Tea Ceremony Workshop</Text>

      {/* Contact Section */}
        <TouchableOpacity onPress={() => Linking.openURL("mailto:humlelu@gmail.com")}>
          <Text style={styles.contact}>Kontakta mig för mer information</Text>
        </TouchableOpacity>

      {/* Social Media Section */}
        <TouchableOpacity
          onPress={() => Linking.openURL("http://instagram.com/humlelu")}
        >
          <FontAwesome name="instagram" size={24} color="#efefef" />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal:  20,
    paddingVertical: 10,
    width: "100%",
  },
  mobilecontainer: {  
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  copyright: {
    color: "#efefef",
    fontSize: 16,
    marginBottom: isMobile ? 10 : 0,
  },
  contact: {
    color: "#efefef",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: isMobile ? 10 : 0,
  },
});