import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Task = ({}) => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Task</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Task;