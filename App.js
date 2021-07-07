import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import logo from './assets/logo.png'

export default function App() {
  const [text, onChangeText] = React.useState('');

  const [fontsLoaded] = useFonts({
    Ubuntu_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.box}>
        <TouchableOpacity>
            <AntDesign style={styles.back} name="leftcircle" size={24} color="white" />
        </TouchableOpacity>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.content}>
      <Text style={styles.title}>Use o seu e-mail para entrar</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        label="E-mail"
        placeholder="E-mail"
        placeholderTextColor='#A7A8AD'
      />
      <TouchableOpacity style={styles.button} title="CONTINUA" activeOpacity={0.8}>
        <Text style={styles.buttonTitle}>
          CONTINUAR
        </Text> 
      </TouchableOpacity>

      <View style={styles.barra}>
      <Text style={styles.subtitle}>
        Não tem Disney+? 
      </Text>

      <TouchableOpacity>
          <Text style={styles.assinar}>
            ASSINAR
          </Text>
       </TouchableOpacity>
      
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1C29',
  },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 15
  },

  image:{
    marginLeft: 135,
    minHeight: 38,
    minWidth: 63,
    width: 130,
    height: 70,
    marginBottom: 10,
  },

  content: {
    paddingHorizontal: 16,
  },

  title:{
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 24,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
     
  },

  input: {
    color: '#A7A8AD',
    backgroundColor: '#31333F',
    width: 377,
    height: 60,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 15,
    marginBottom: 25,
  },

  button: {
   width: '100%',
   height: 50,
   backgroundColor: '#0072D2',
   borderRadius: 4,
   flexDirection: 'row',
   alignItems: 'center',
  },

  buttonTitle:{
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 15,
    alignItems: 'center',
    color: '#FFF',
    marginLeft: 140,
  },

  barra: {
    paddingTop: 20,
    flexDirection: 'row',
    paddingRight: 2,
  },

  subtitle: {
    color: '#C9CACE',
    fontSize: 15,
  },

  assinar: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Ubuntu_500Medium',
    marginLeft: 5,
    marginTop: 0.5,
  }
});
