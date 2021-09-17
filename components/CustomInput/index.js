import React from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const Input = ({ placeholder, valor, state, transparent }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: "#fff", height: 'auto', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 5,  alignItems: 'center'}}>
            <AntDesign name="search1" size={20} color="#bbb" />
            <TextInput
                value={valor ? valor : null}
                placeholder={placeholder}
                onChangeText={(e) => { }}
                style={{ width: '85%', borderRadius: 5, paddingHorizontal: transparent ? 0 : 10 }}
            />
        </View>
    )
}

export default Input;