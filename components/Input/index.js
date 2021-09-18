import React from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const Input = ({ placeholder, valor, state, transparent }) => {
  return (
    <TextInput
      value={valor ? valor : null}
      placeholder={placeholder}
      onChangeText={(e) => { }}
      style={{ height: 50, width: '100%', borderRadius: 5, paddingHorizontal: transparent ? 0 : 10, backgroundColor: transparent ? "transparent" : "#ddd" }}
    />
  )
}

export default Input;