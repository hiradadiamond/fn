import React from "react";
import { Text, View , Image, Pressable, TextInput} from "react-native";
import { styles } from "./styles";

const EditableBox = ({label, value, onChangeText, editable, style}) => {
    return (
        <View style={[styles.container, style]}>
           <Text style={styles.label}>{label}</Text>
           <TextInput editable={editable} value={value} onChangeText={onChangeText} styles={styles.input}/>
        </View>
    );
}

export default EditableBox;