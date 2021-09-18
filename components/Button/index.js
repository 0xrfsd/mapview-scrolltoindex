import React from 'react';
import { Text, View, Pressable } from 'react-native';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Button = ({ title, borderRadius, borderColor, borderWidth,  bg, color, icon, action }) => {
    return (
        <Pressable
            onPress={() => action}
            style={{
                borderColor: borderColor ? borderColor : null,
                borderWidth: borderWidth ? borderWidth : null,
                borderRadius: borderRadius ? borderRadius : 5,
                backgroundColor: borderColor && borderWidth ? "transparent" : bg ? bg : "#333", 
                height: 50,
                width: '100%',
                paddingHorizontal: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row'
            }}

        >
            <Text style={{ color: borderColor && borderWidth ? borderColor: "#fff", fontWeight: 'bold' }}>{title}</Text>
            {icon ? <AntDesign name={icon} size={24} color={borderColor && borderWidth ? borderColor: "#fff"} /> : null}
        </Pressable>
    )
}

export default Button;