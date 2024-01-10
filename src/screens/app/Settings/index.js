import React, {useState} from "react";
import { Linking, ScrollView, Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/common/Button";
import EditableBox from "../../../components/EditableBox";
import { NavigationContainer } from "@react-navigation/native";

const Settings = ({ navigation }) => {
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({name: 'user', email: 'user@gmail.com'})

    const onItemPress = () => {
        Linking.openURL('https://google.com')
    }
    const onEditPress = () => {
        setEditing(true);
    }
    const onSave = () => {
        console.log('pressing save');
        setEditing(false);
    }

    const onChange = (key, value) => {
        setValues(v => ({
            ...v, 
            [key]: value
        }));
    }

    const onBackPress = () => {
        navigation.navigate('Profile');
    }

    return(
        <SafeAreaView>
            <Header showBack onBackPress={onBackPress} title="Settings"/>
            <ScrollView style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Pesonal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon}source={require('../../../assets/edit.png')}/>
                    </Pressable>    
                </View>
                <EditableBox label="Name" value={values.name} editableText={editing} onChangeText={(v)=> onChange('name', v)}/>
                <EditableBox label="Email" value={values.email} editableText={editing} onChangeText={(v) => onChange('email', v)}/>
                
                { editing ? ( <Button style={styles.button} title="Save" handlePress={onSave}/> ): null }
                
                <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ"/>
                <ListItem onPress={onItemPress} style={styles.item} title="Contact Us"/>
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms"/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Settings;