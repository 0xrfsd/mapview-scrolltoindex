import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const URL = 'https://github.com/0xrfsd.png';

const Notification = ({ propriedade }) => {

    const navigation = useNavigation();

    return (
        <>
                <Pressable
                    style={{ width: '100%', height: 'auto', borderWidth: 1, borderColor: "#ddd", paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row' }}
                    onPress={() => {
                        navigation.navigate('Message')
                    }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{ uri: URL}} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 10 }}/>
                    <Text>{propriedade}</Text>
                    </View>
                    <View style={{ height: 25, width: 25, backgroundColor: "#DE541E", borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#fff"}}>1</Text>
                    </View>
                </Pressable>
        </>
    )
}

export default Notification;