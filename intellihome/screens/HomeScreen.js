import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Sección azul */}
            <View style={[styles.section, { backgroundColor: 'white' }]}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, styles.heading]}>BIENVENIDO A INTELLIHOME</Text>
                    <Text style={styles.text}>Transformando hogares simplificando vidas</Text>
                </View>
            </View>
            {/* Sección blanca */}
            <View style={[styles.section, { backgroundColor: '#0c1d37' }]}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/intellihome-logo.png')}
                        style={{ width: 450, height: 450 }} 
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        paddingHorizontal: 20,
    },
    imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    text: {
        fontSize: 40,
        textAlign: "center",
        marginTop: 20,
        color: '#3fb0f4',
        marginLeft: 30,
        fontFamily: 'sans-serif', 
        fontWeight: "bold",   
    },
    heading: {
        fontSize: 65,
        fontWeight: "bold",
        color: "#0c1d37",
        marginBottom: 10,
        marginLeft: 30,
        fontFamily: 'sans-serif',
    }
});

export default HomeScreen;