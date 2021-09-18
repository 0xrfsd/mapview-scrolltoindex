import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';

import styled from 'styled-components/native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';


const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        marginVertical: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
}))`
  `;

const Regioes = () => {

    const Item = ({ image, title, venda, preco }) => {
        return (
            <Pressable
                onPress={() => { }}
                style={{ height: `auto`, width: `auto`, paddingHorizontal: 10, paddingVertical:  10, alignItems: `center`, justifyContent: `center`, borderRadius: 5, backgroundColor: "transparent", borderWidth: 1, borderColor: `#333`, marginRight: 10, display: `flex`, flexDirection: `row` }}
            >
                <Text style={{ fontWeight: 'bold', color: "#333", fontSize: 14, textAlign: 'left' , marginRight: 5}}>{title}</Text>
                <MaterialCommunityIcons name="pin" size={14} color="black" />

            </Pressable>
        )
    }

    return (
        <>
            {/* <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 16, textAlign: 'left', fontFamily: 'regular' }}>Novos lançamentos em 2022</Text> */}
            <Container>
            <Item title="Jardim Goiás" />
            <Item title="Parque Vaca Brava" />
            <Item title="Aldeia do Vale" />
            <Item title="Jardins" />
            </Container>
        </>
    )
}

export default Regioes;