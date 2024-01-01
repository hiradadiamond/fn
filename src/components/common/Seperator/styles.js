import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    line:{
        backgroundColor: Colors.lightGrey, 
        height: 1,
        flex: 1,
    },
    text:{ 
        color: Colors.indigo,
        fontWeight: '500'
    }
})