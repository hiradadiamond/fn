import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/common/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/input';
import CheckBox from '../../../components/CheckBox';
import Seperator from '../../../components/common/Seperator';
import GoogleLogin from '../../../components/GooglrLogin';


const SignIn = () => {
    const onSignUp = () => {

    }
    return (
        <View style={styles.container}>
         <AuthHeader title="Sign In"/>

         <Input placeholder="example@gmail.com" label="Email"/>
         <Input isPassword placeholder="********" label="Password"/>

         <Button style={styles.button} title="Sign In"/>
         <Seperator text="Or sign in with"/>
         <GoogleLogin/>

         <Text style={styles.footerText}>
            Don't have an account?
            <Text onPress={onSignUp} style={styles.footerLink}> SignUp</Text>
         </Text>
        </View>   
    );
}

export default SignIn;