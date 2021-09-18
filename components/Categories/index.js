import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';

const A = "https://o.remove.bg/downloads/99dcd1da-1e1d-49f3-a631-6b58d6c6b4b6/one-removebg-preview.png";
const B = "https://o.remove.bg/downloads/a6f12e5c-713e-4a91-8281-681e19777be5/ap-removebg-preview.png";
const C = "https://o.remove.bg/downloads/bad8995d-f58d-4c7d-8499-5dbd9b5ac17c/c-removebg-preview.png";
const D = "https://o.remove.bg/downloads/120af00b-e471-4842-a564-c32d1bd3cf52/b2-removebg-preview.png";

const Categories = ({ }) => {
    return (
        <>
                    <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15 }}>
                <Pressable
                    onPress={() => {
                    }}
                    style={{ backgroundColor: "#fff", borderRadius: 5, height: 55, width: '49%', paddingRight: 10, borderColor: "#333", justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                    <Image source={{ uri: A }} style={{ borderRadius: 5, height: 50, width: 50}}/>
                    <Text style={{ fontSize: 12, color: "#777" }}>{" "}Flats</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                    }}
                    style={{ backgroundColor: "#fff", borderRadius: 5, height: 55, width: '49%', paddingLeft: 10, borderColor: "#333", justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 12, color: "#777" }}>Apartamentos</Text>
                    <Image source={{ uri: B }} style={{ borderRadius: 5, height: 50, width: 50}}/>
                </Pressable>
            </View>
            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15 }}>
                <Pressable
                    onPress={() => {
                    }}
                    style={{ backgroundColor: "#fff", borderRadius: 5, height: 55, width: '49%', paddingRight: 10, borderColor: "#333", justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                    <Image source={{ uri: C }} style={{ borderRadius: 5, height: 50, width: 50}}/>
                    <Text style={{ fontSize: 12, color: "#777" }}>{" "}Casas</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                    }}
                    style={{ backgroundColor: "#fff", borderRadius: 5, height: 55, width: '49%', paddingLeft: 10, borderColor: "#333", justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 12, color: "#777" }}>Duplex</Text>
                    <Image source={{ uri: D }} style={{ borderRadius: 5, height: 50, width: 50}}/>
                </Pressable>
            </View>
        </>
    )
}

export default Categories;