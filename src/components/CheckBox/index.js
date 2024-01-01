import React from "react"
import { TouchableOpacity, Image, View } from 'react-native';
import {styles} from './styles';
const CheckBox = ({checked, onCheck}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onCheck}style={styles.container}>
            {checked? (
            <View style={styles.innerContainer}>
                <Image style={styles.checkIcon} source={require('../../assets/Check.png')}/>
            </View>):null}
        </TouchableOpacity>
    )

}

export default React.memo(CheckBox);