import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AboutScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GALERIA DE IMAGENES</Text>
      </View>
      <View style={styles.imageGrid}>
        <View style={styles.row}>
          <Image
            source={require("../assets/casa1.jpg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/casa2.jpg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/casa3.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../assets/casa4.jpg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/casa5.jpg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/casa6.jpg")}
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
    alignItems: "center", 
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "#32a8f8",
    marginTop: 20,
  },
  imageGrid: {
    paddingHorizontal: 2, 
    paddingVertical:5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start", 
    marginBottom: 2,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    marginRight: 30, 
    marginBottom: 30, 
  },
});

export default AboutScreen;