import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ContactScreen = () => {
    const [mensaje, setMensaje] = useState('');

    // Función para enviar el mensaje a través de WhatsApp
    const enviarMensajeWhatsApp = () => {
        // Número de teléfono al que se enviará el mensaje (puedes cambiarlo al número deseado)
        const telefono = '6181815349';
        // Generar el enlace con el protocolo 'whatsapp://send' y los parámetros adecuados
        const enlaceWhatsApp = `whatsapp://send?phone=${telefono}&text=${mensaje}`;
        // Abrir el enlace en la aplicación de WhatsApp
        Linking.openURL(enlaceWhatsApp);
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>CONTACTANOS</Text>
                <Text style={styles.text}>¿Alguna pregunta o sugerencia?. ¡Escribenos!</Text>
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    placeholder="Mensaje"
                    multiline
                    value={mensaje}
                    onChangeText={setMensaje}
                />
                <View style={styles.buttonContainer}>
                    {/* Botón para enviar mensaje a WhatsApp */}
                    <Pressable style={styles.button} onPress={enviarMensajeWhatsApp}>
                        <Text style={styles.buttonText}>Enviar mensaje a WhatsApp</Text>
                        <MaterialCommunityIcons name="whatsapp" size={24} color="white" />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 45,
        fontWeight: 'bold',
        color: "#0c1d37",
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'sans-serif',
    },
    text: {
        fontSize: 25,
        color:'#32a8f8',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily:'sans-serif',
        fontWeight: 'bold',
    },
    formContainer: {
        width: '70%',
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
        color: 'black',
    },
    messageInput: {
        height: 100,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#32a8f8',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        marginTop:30,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
