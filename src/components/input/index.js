import React, { useState } from "react";
import {styles} from './styles';
import { Image, Pressable, Text, TextInput, View } from "react-native";

const Input = ({label, placeholder, isPassword}) => {
    const [isPwdVisible, setIsPwdVisible] = useState(false);
    const onEyePress = () => {
        setIsPwdVisible(!isPwdVisible)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
            <TextInput secureTextEntry={ isPassword && !isPwdVisible} placeholder={placeholder}style={styles.input}/>
           
           {isPassword && ( <Pressable onPress={onEyePress}>
                <Image style={styles.eye}source={isPwdVisible? require('../../assets/eye.png'): require('../../assets/eye_closed.png')}/>
            </Pressable>)}
            </View>
        </View>
    );
}

export default React.memo(Input);