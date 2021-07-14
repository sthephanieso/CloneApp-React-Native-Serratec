import 'react-native-gesture-handler';
import React from 'react';
import logo from '../../../assets/logo.png'; 
import { MyButton } from '../../components/Button';
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Senha({navigation}) {
  const [text, onChangeText] = React.useState('');

  return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.box}>
          <TouchableOpacity>
              <AntDesign style={styles.back} 
              name="leftcircle" 
              size={24} 
              color="white" 
              onPress={() => {navigation.navigate('Email')}}/>
          </TouchableOpacity>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.content}>
        <Text style={styles.title}>Digite a senha</Text>
        
        <View style={styles.boxInput}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          label="Senha"
          placeholder = "Password"
          secureTextEntry={true}
          placeholderTextColor='#A7A8AD'
        />
        <Text style={styles.text}>(maiúculas e minúsculas)</Text>
        </View>
        <MyButton title="ENTRAR" 
        activeOpacity={0.8} 
        onPress={() => {navigation.navigate('Home')}}>
        </ MyButton>

        <View style={styles.barra}>
        <TouchableOpacity>
            <Text style={styles.subtitle}>
              Esqueceu a senha?
            </Text>
        </TouchableOpacity>
        
        </View>
        </View>
      </View>
  );
}

