import React, { useState } from "react"
import { View, Text, Image, Pressable } from 'react-native';
import {styles} from './styles';
 
const ProductHomeItem = ({title, image, price, date, time, onPress}) => {
   return (
    <Pressable onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={{uri: image}}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
    </Pressable>
   )
}

export default React.memo(ProductHomeItem);