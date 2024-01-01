import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        paddingHorizontal: 8,
        backgroundColor: Colors.indigo,
        borderRadius: 8,
        width: '100%'
    },
    title:{ 
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center'
    }
})