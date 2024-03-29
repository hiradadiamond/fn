import React from "react"
import { Pressable, Image, View, Text } from 'react-native';
import {styles} from './styles';

const AuthHeader = ({title, onBackPress}) => {
    return (
        <View style={styles.container}>
        <Pressable onPress={onBackPress}>
            <Image style={styles.image}source={require('../../assets/icon.png')}></Image> 
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        </View>
    )

}

export default React.memo(AuthHeader);