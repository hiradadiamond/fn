import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        padding: 24,
    },
    agreeRow:{
       flexDirection: 'row',
       alignItems: 'center', 
       marginBottom: 20,
    },
    agreeText:{
        color: Colors.indigo,
        marginHorizontal: 13,
    },
    boldText:{
        fontWeight: 'bold'
    }
    , 
    button:{
        marginVertical: 20,
    },
    footerText:{
        fontSize: 14,
        color: Colors.indigo,
        marginBottom: 25,
        textAlign: 'center'
    },
    footerLink:{
        fontWeight: 'bold' 
    }
})