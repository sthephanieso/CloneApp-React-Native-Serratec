import React from 'react';
import { Text, 
  Image, 
  View, 
  TouchableOpacity } from 'react-native';
// import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

export function MyButton(props){
  return(
    <TouchableOpacity
      style={styles.container}
      {...props}
    >
      
      <Text style={styles.title}>
        { props.title }
      </Text>
    </TouchableOpacity>
  );
}