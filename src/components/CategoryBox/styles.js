import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer:{
        backgroundColor:Colors.lightGrey,
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
    },
    image:{
        width: 32,
        height: 32
    },
    title: {
        color: Colors.grey,
    }
})