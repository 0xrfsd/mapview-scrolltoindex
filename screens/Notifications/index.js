import React from 'react';
import { Text, View, Pressable } from 'react-native';

import Header from '../../components/Header';
import Notification from '../../components/Notification';

const Notifications = ({ }) => {

    const data = [
        { id: 0, propriedade: 'Sitio São José' },
        { id: 1, propriedade: 'Ap Av. Faria Lima' },
        { id: 2, propriedade: 'Ap Vila Augusta 3Q' }
    ];

    return (
        <>
            <Header goback={true} screen="Notifications" />
            {
                data.map((data, index) => {
                    return <Notification propriedade={data.propriedade} key={index} />
                })
            }
        </>
    )
}

export default Notifications;