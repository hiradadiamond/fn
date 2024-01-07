import React, { useState } from "react"
import { View, Text, Image, Pressable } from 'react-native';
import {styles} from './styles';
import { Colors } from "../../utils/colors";
 
const CategoryBox = ({title, image, onPress, isFirst, isSelected}) => {
   return (
    <Pressable onPress={onPress} style={[styles.container, isFirst? {marginLeft: 24}: {}]}>
        <View style={[styles.imageContainer, isSelected ? {backgroundColor: Colors.black}: {}] }>
            <Image style={styles.image} source={{uri: image}}/>
        </View>
        <Text style={[styles.title, isSelected ? {color: Colors.indigo}: {}]}>{title}</Text>
    </Pressable>
   )
}

export default React.memo(CategoryBox);