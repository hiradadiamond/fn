import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/common/Button';

const Splash = () => {
    const handlePress = () => {
        console.log('object clicked')
    }
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_1.png')} />
           <View style={styles.titleContainer}>
             <Text style={styles.title}>You'll Find</Text>
             <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
             <Text style={styles.title}> Here!</Text>    
           </View>

            <Button title={"Sign Up"} handlePress={handlePress}/>
            <Pressable hitSlop={20}>
                <Text style={styles.signin}>Sign In</Text>
            </Pressable>

        </View>
    );
}

export default Splash;