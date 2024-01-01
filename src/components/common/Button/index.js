import React from "react"
import { TouchableOpacity, Text } from 'react-native';
import {styles} from './styles';
const Button = ({title, handlePress, style}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress}style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )

}

export default React.memo(Button);