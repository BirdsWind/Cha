import { Dimensions } from "react-native";

export default function useResponsive() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const isMobile = windowWidth < 600; // Adjust breakpoint as needed
  const isTablet = windowWidth >= 600 && windowWidth < 900;
  const isDesktop = windowWidth >= 900;

  return { windowWidth, windowHeight, isMobile, isTablet, isDesktop };
}