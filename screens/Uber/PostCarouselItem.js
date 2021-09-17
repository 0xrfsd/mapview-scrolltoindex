import React from 'react';
import { View, Text, Image, useWindowDimensions, StyleSheet, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
      height: 180,
      padding: 5,
      margin: 10,
      marginBottom: 30,
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
  
      elevation: 10,
    },
  
    innerContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden'
    },
  
    image: {
      height: 185,
      aspectRatio: 1,
      resizeMode: 'cover',
    },
  
    bedrooms: {
      marginVertical: 10,
      color: '#5b5b5b',
    },
    description: {
      fontSize: 15,
    },
    address: {
        fontSize: 12,
        marginBottom: 10
      },
    prices: {
      fontSize: 15,
      marginVertical: 10,
    },
    oldPrice: {
      color: '#5b5b5b',
      textDecorationLine: 'line-through',
    },
    price: {
      fontWeight: 'bold',
    },
    totalPrice: {
      color: '#5b5b5b',
      textDecorationLine: 'underline',
    }
  });

const Post = (props) => {
    
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }

  return (
    <Pressable onPress={goToPostPage} style={[styles.container, { width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image  */}
        <Image
          style={styles.image}
          source={{uri: post.image}}
        />

        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedroom  */}
          <Text style={styles.bedrooms}>
            {post.bed} quartos | {post.bedroom} banheiros
          </Text>

          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type} • {post.title}
          </Text>

          {/*  Old price & new price */}
          <Text style={styles.prices}>
          <Text style={styles.price}>R$ {post.newPrice} </Text>
          </Text>
          
          <Text style={styles.address} numberOfLines={2}>
            {post.address} | {post.cep}
          </Text>

        </View>
      </View>
    </Pressable>
  );
};

export default Post;