import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/common/Button";

const Profile = ({ navigation }) => {
    const num = 10;
    const onLogout = () => {
        console.log('log out clicked');
    }
    const onSettingPress = () => {
        navigation.navigate('Settings');
    }

    const onListingPress = () => {
        navigation.navigate('MyTaskList');
    }

    const handlePress = () => {
        navigation.navigate('CreateListing');
    }
    return(
        <SafeAreaView style={{flex: 1}}>
            <Header title="Profile" showLogout onLogout={onLogout}/>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>Hira Kafle</Text>
                    <Text style={styles.email}>hello@gmail.com</Text>

                    <ListItem onPress={onListingPress} title="My Listing" subTitle={`you have ${num} lisitngs`} />
                    <ListItem onPress={onSettingPress} title="Setting" subTitle="Account FAQ Contact" />
                </View>
                <Button handlePress={handlePress} style={{flex: 0}}title="Add New Listing" />
            </View>
    </SafeAreaView>
    );
}

export default Profile;