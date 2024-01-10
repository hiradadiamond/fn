import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 20,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: Colors.white,
        borderRadius: 4,
    },
    label:{
        fontSize:12,
        color: Colors.grey,
        marginBottom: 6,
    },
    input:{
        color:Colors.black,
        fontSize: 14,
        fontWeight: '500'
    }

})