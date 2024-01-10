import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        padding: 24,
        flex: 1
    },
    name:{
        color: Colors.black,
        fontSize: 20,
        fontWeight: 'bold', 
        marginBottom: 12  
    },
    email: {
        color: Colors.lightGrey,
        fontSize: 14
    }, 
    content: {
       flex: 1,
    }   
})