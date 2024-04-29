import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { SimpleLineIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

// Importa las pantallas
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import GalleryScreen from './screens/GalleryScreen';
import ContactScreen from './screens/ContactScreen';

// Componente personalizado para el contenido del Drawer
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image
          source={require("./assets/intellihome-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

// Crear el Drawer Navigator
const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <CustomDrawerContent {...props} />} 
        drawerContentOptions={{
          labelStyle: { color: 'white' }, // Cambia el color de las letras del Drawer
        }}
      >
        <Drawer.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <SimpleLineIcons name="home" color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#0c1d37',
              borderBottomColor: 'white',
            },
          }}
        />
        <Drawer.Screen
          name="Acerca De"
          component={AboutScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <AntDesign name="infocirlceo" color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#0c1d37',
              borderBottomColor: '#0c1d37',
            },
          }}
        />
        <Drawer.Screen
          name="Contacto"
          component={ContactScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <AntDesign name="contacts" color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#0c1d37',
              borderBottomColor: '#0c1d37',
            },
          }}
        />
        <Drawer.Screen
          name="Galería"
          component={GalleryScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="images" color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#0c1d37',
              borderBottomColor: '#0c1d37',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  drawerHeader: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: '#0c1d37',
  },
  logo: {
    width: 120,
    height: 90,
  },
});

export default Navigation;
