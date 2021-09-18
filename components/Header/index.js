import React from 'react';
import { Text, View, Pressable, SafeAreaView } from 'react-native';

import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const Header = ({ goback, screen, close, color, helper, goto }) => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "transparent" }}>
            <View style={{ width: '100%', height: 'auto', paddingVertical: 15, display: 'flex', flexDirection: 'row', paddingHorizontal: 20, backgroundColor: "transparent", justifyContent: 'space-between', alignItems: 'center' }}>
                {goback ? <Pressable
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <AntDesign name={close ? "closesquare" : "arrowleft"} size={30} color={color} />
                </Pressable> : null}
                <Text style={{ fontSize: 26, fontFamily: 'regular' }}>{screen}</Text>
                {helper ?
                    <Pressable onPress={() => {
                        navigation.navigate(goto)
                    }}>
                        <Entypo name={helper} size={30} color={color} />
                    </Pressable> : null}
            </View>
        </SafeAreaView>
    )
};

export default Header;