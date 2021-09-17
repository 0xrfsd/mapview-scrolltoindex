import React from 'react';
import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomMarker = ({ price, places, coordinate, onPress, isSelected }) => {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={{ backgroundColor: isSelected ? 'black' : 'white', padding: 5, borderRadius: 10, borderColor: 'grey', borderWidth: 1 }}>
        <MaterialCommunityIcons name="home-circle-outline" size={33} color={isSelected ? "#fff" : "#333"} />      
        </View>
    </Marker>
  );
};

export default CustomMarker;