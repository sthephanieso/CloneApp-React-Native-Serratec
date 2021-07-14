import 'react-native-gesture-handler';
import React from 'react';
import { styles } from './styles'
import logo from '../../../assets/logo.png'; 
import { MyButton } from '../../components/Button';

import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';


export default function Email({navigation}) {
  const [text, onChangeText] = React.useState('');

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

        <MyButton 
        title="CONTINUAR" 
        activeOpacity={0.8} 
        onPress={() => {navigation.navigate('Senha')}}/>

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
