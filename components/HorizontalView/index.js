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
    },
}))`
  `;

const HorizontalView = () => {

    const Item = ({ image, title, venda, preco }) => {
        return (
            <Pressable
                onPress={() => { }}
                style={{ height: 230, width: 150, borderRadius: 5, backgroundColor: "#fff", marginRight: 10 }}
            >
                <Image source={{ uri: image }} style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, width: 150, height: 100 }} />
                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'left' }}>{title}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                    <MaterialCommunityIcons name="sale" size={12} color="black" />
                        <Text style={{ fontSize: 12, textAlign: 'left' }}>{" "}{venda ? "Propriedade à venda" : "Propriedade à alugar"}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 5 }}>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 10 }}>3</Text>
                            <Text style={{ fontSize: 10 }}>Banheiros</Text>
                        </View>

                        <Text>|</Text>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 10 }}>3</Text>
                            <Text style={{ fontSize: 10 }}>Quartos</Text>
                        </View>

                        <Text>|</Text>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 10 }}>1259</Text>
                            <Text style={{ fontSize: 10 }}>M²</Text>
                        </View>

                    </View>

                    <Text style={{ fontWeight: 'bold', color: "#DE541E", fontSize: 14, textAlign: 'left', marginTop: 10 }}>R$ {preco}</Text>

                </View>
            </Pressable>
        )
    }

    return (
        <>
            {/* <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 16, textAlign: 'left', fontFamily: 'regular' }}>Novos lançamentos em 2022</Text> */}
            <Container>
                <Item image="https://i.pinimg.com/originals/bb/7a/00/bb7a00b1cdccd419d6bad81cc2707669.jpg" title="Bela casa em condominio" venda preco="1.000.000,00" />
                <Item image="https://i.pinimg.com/originals/c4/33/8d/c4338d4255eeccfd0f486b099e9800ec.jpg" title="Bela casa em condominio" venda preco="2.300.000,00" />
                <Item image="https://www.tuacasa.com.br/wp-content/uploads/2021/03/cores-para-fachadas-de-casas-1.jpg" title="Bela casa em condominio" venda preco="860.000,00" />
                <Item image="https://decorandocasas.com.br/wp-content/uploads/2021/02/Cores-para-parede-externa-2021-7.jpg" title="Bela casa em condominio" venda preco="1.860.000,00" />
            </Container>
        </>
    )
}

export default HorizontalView;