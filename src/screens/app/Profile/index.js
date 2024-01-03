import React from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = ({}) => {
    return(
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <Text>Profile</Text>
        </ScrollView>
    </SafeAreaView>
    );
}

export default Profile;