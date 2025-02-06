import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import ResponsiveImage from '@/components/sadouImage';
import ProductGallery from '@/components/productGallery';
import FooterSection from '@/components/footerSection';
import useResponsive from '@/hooks/useResponsive';

const { windowWidth } = useResponsive(); // Use the hook

const MatchaAndSong = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroText}>Upplev Matcha och Dian Cha</Text>
      </View>

      {/* Intro Section */}
      <View style={styles.intro}>
        <Text style={styles.introText}>
          På <Text style={styles.brand}>Matcha & Song</Text> bjuder vi in dig till en resa genom två rika teceremonier som förenar historia, kultur och smak.
        </Text>
      </View>

      {/* Matcha Section */}
      <View style={styles.section}>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Matcha – Japansk mindfulness i en skål</Text>
          <Text style={styles.sectionText}>
            Med sina rötter i det japanska tehusets stillhet och elegans är matcha-ceremonin en konstform som betonar mindfulness och närvaro. Vi guidar dig genom varje steg, från den subtila doften av matchapulver till den vibranta smaken av det perfekt vispade teet.
          </Text>
        </View>
        <ResponsiveImage imageSource={require('../assets/images/sadou.png') } />
      </View>

      {/* Song Dian Cha Section */}
      <View style={styles.section}>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Song Dian Cha – Konsten från Songdynastin</Text>
          <Text style={styles.sectionText}>
            En historisk teceremoni från Songdynastin i Kina, där teets skönhet och hantverk hyllas. Här får du uppleva den traditionella metoden att vispa te till ett skummande mästerverk.
          </Text>
        </View>
        <ResponsiveImage imageSource={require('../assets/images/dianCha.png') } />
      </View>

      {/* Call to Action */}
      <View style={styles.cta}>
        <Text style={styles.ctaText}>Utforska de unika teceremonierna med oss.</Text>
        <TouchableOpacity style={styles.ctaButton}  >
          <Text style={styles.ctaButtonText}  onPress={() => Linking.openURL("mailto:humlelu@gmail.com")}>
            Boka din teceremoni
          </Text>
        </TouchableOpacity>
      </View>
 
        {/* Product gallery Section */}
      <View style={styles.section}>
          <ProductGallery />
      </View>
         
        {/* Footer section */}
      <View style={styles.cta}>
        <FooterSection  />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E0', // Mjuk beige bakgrundsfärg
  },
  hero: {
    backgroundColor: '#8FB996', // Harmonisk grön
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  intro: {
    padding: 20, // The padding property in React Native applies to the space inside the View component, creating a buffer between the content (such as text or images) and the edges of the View. This means that the padding affects the content inside the View, not the View itself.
    backgroundColor: '#F8EDE3', // Ljus beige
  },
  introText: {
    fontSize: 18,
    color: '#4A403A',
    textAlign: 'center',
  },
  brand: {
    fontWeight: 'bold',
    color: '#8FB996', // Samma gröna som i Hero
  },
  section: {
    padding: 20,
    alignItems: 'center',
    width: '100%', // Forces consistency in width
  },
  textContainer: {
    width: windowWidth * 0.9, // Ensures text doesn't overflow
    alignSelf: 'center', 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A403A',
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
  },
  sectionText: {
    fontSize: 16,
    color: '#4A403A',
    lineHeight: 22,
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
  },
  cta: {
    alignItems: 'center',
    backgroundColor: '#8FB996',
  },
  ctaText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  ctaButton: {
    backgroundColor: '#4A403A', // Mörkbrun för kontrast
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MatchaAndSong;