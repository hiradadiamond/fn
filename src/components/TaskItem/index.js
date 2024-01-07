import React from "react"
import { View, Text, Image, Pressable } from 'react-native';
import {styles} from './styles';
 
const TaskItem = ({ title, image, price, date, time, onPress}) => {
   return (
    <Pressable onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={{uri: image}}/>
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
        <Image style={styles.icon} source={require('../../assets/close.png')}/>
    </Pressable>
   )
}

export default React.memo(TaskItem);