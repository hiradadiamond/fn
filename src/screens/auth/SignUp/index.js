import React, { useState } from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/common/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/input';
import CheckBox from '../../../components/CheckBox';
import Seperator from '../../../components/common/Seperator';
import GoogleLogin from '../../../components/GooglrLogin';


const SignUp = () => {
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {

    }
    const onCheck = () => {
        setChecked(!checked);
    }
    return (
        <View style={styles.container}>
         <AuthHeader title="SignUp"/>
         <Input placeholder="John Doe" label="Name"/>
         <Input placeholder="example@gmail.com" label="Email"/>
         <Input isPassword placeholder="********" label="Password"/>
         <View style={styles.agreeRow}>
            <CheckBox checked={checked} onCheck={onCheck}/>
            <Text style={styles.agreeText}>I agree with 
            <Text style={[styles.boldText]}>Terms</Text>&
            <Text style={[styles.boldText]}>Privacy</Text> </Text>
         </View>

         <Button style={styles.button} title="Sign Up"/>
         <Seperator text="Or sign up with"/>
         <GoogleLogin/>

         <Text style={styles.footerText}>
            Already have an account ?
            <Text onPress={onSignIn} style={styles.footerLink}> SignIn</Text>
         </Text>
        </View>   
    );
}

export default SignUp;