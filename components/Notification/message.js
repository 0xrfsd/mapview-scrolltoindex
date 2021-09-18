import React from 'react';
import { Text, View, Pressable } from 'react-native';

import Header from '../../components/Header';

const Message = ({ }) => {
    return (
        <>
            <Header close color="#DE541E" goback={true} screen="Message" />
            <Text>This is a message screen</Text>
        </>
    )
}

export default Message;