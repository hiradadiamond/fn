import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        marginBottom: 20,
    },
    label:{
        marginBottom: 8,
        color: Colors.indigo,
        fontSize: 14,
        fontWeight: '500'
    },
    inputContainer:{ 
        borderColor: 'grey',
        borderWidth: 1, 
        borderRadius: 14, 
        flexDirection: 'row',     
    },
    input:{
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1

    },
    eye:{
        width: 24,
        height: 24,
        marginHorizontal: 16,
        marginVertical: 15,
    }
})