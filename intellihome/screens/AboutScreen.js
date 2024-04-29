import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AboutScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ACERCA DE</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Cada día se aplican más sistemas domóticos para viviendas, ya que contar
            con arquitectura domótica en casa puede ser una gran ventaja en nuestro
            día a día, y una oportunidad para disfrutar de una mayor calidad de
            vida.

            {"\n"}

            En <Text style={styles.intellihomeText}>INTELLIHOME</Text> nos dedicamos a diseñar y desarrollar software de
            última generación, para la implementación en casas domóticas,
            brindando soluciones de vanguardia que transforman la forma en que
            las personas interactúan con sus hogares, ofreciendo soluciones
            integrales y personalizadas que mejoren la calidad de vida de las
            personas.

            {"\n"}

            Los sistemas domóticos para viviendas, también son muy ventajosos porque
            contribuyen al ahorro del consumo energético, además de
            beneficiarte económicamente, también puedes ser más respetuoso con el
            medio ambiente.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/1.jpeg')}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    marginBottom:20,
    marginTop:40,
    fontFamily: 'sans-serif',
    color:'#32a8f8',
    fontWeight: "bold",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
    maxWidth: "50%",
  },
  imageContainer: {
    marginLeft: 20,
    alignSelf: 'flex-start', 
  },
  image: {
    width: 510, 
    height: 510, 
    marginLeft:70,
  },
  text: {
    fontSize: 20,
    textAlign: "justify",
    color: "#333",
  },
  intellihomeText: {
    color: '#32a8f8',
    fontWeight: 'bold',
  },
});

export default AboutScreen;
