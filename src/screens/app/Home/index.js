import React from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({}) => {
    return(
        <SafeAreaView>
           <ScrollView style={styles.container}>
             <Text>Home</Text>
           </ScrollView>
        </SafeAreaView>
    );
}

export default Home;