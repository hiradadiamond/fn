import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    titleContainer:{
        marginVertical: 54,
    },
    image: {
        width: '100%',
        height: 200
    },
    title:{
        fontSize: 40,
        textAlign: 'center'
    },
    innerTitle:{
        color: Colors.orange,
        textDecorationLine: 'underline'
    },
    signin:{
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.indigo,
        textAlign: 'center',
        marginTop: 30,
    },
    buttonContainer:{
        flexDirection: 'row', 
        width: '100%'
    }
})