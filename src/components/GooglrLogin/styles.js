import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        marginVertical: 5,
        backgroundColor: Colors.darkGrey,
        borderRadius: 14,
        width: '50%', 
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8, 
        marginBottom: 45,
        marginVertical: 20,
    },
    image: {
        width: 30,
        height: 30,
    }
})