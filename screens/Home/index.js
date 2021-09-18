import React from 'react';
import { View, Text, Pressable, ImageBackground, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';


import Header from '../../components/Header';
import Input from '../../components/CustomInput';
import Button from '../../components/Button';
import Categories from '../../components/Categories';
import HorizontalView from '../../components/HorizontalView';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const URI = 'https://images.pexels.com/photos/6161855/pexels-photo-6161855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const Home = () => {

    return (
        <ScrollView>
            <ImageBackground opacity={.1} source={{ uri: URI }} style={{ width: '100%', height: windowHeight }}>
                <Header goback={false} goto="Notifications" color="#DE541E" screen="Imob" helper="notification" />
                <View style={{ paddingHorizontal: 10, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center', fontFamily: 'regular', width: '80%' }}>A escolha perfeita para o seu futuro!</Text>
                    <View style={{ height: 2, width: '50%', backgroundColor: "#DE541E", borderRadius: 100, marginVertical: 10 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', fontFamily: 'extra-light', marginBottom: 10 }}>Todas nossas propriedades são selecionadas e vendidas exclusivamente por corretores imobiliarios registrados no CRECI</Text>
                    <Input placeholder="Apartamento duplex no jardim goiás" />
                    <Categories />
                </View>
                <HorizontalView />
            </ImageBackground>
            <View style={{ height: 500 }} />
        </ScrollView>
    );
}

export default Home;