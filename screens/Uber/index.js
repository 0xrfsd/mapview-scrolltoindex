import React from 'react';
import { Text, View, Pressable, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import HorizontalView from '../../components/HorizontalView';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Uber = ({ }) => {

    return (
        <MapView
            initialRegion={{
                latitude: -16.7031441,
                longitude: -49.2336704,
                latitudeDelta: 0.0082,
                longitudeDelta: 0.0081,
            }}
            style={{ height: height, width: width }}>
            <View style={{ flex: 1, height: height, width: width }}>
            </View>
        </MapView>
    )
}

export default Uber;