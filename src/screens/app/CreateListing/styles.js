import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        padding: 24,
    },
    sectionTitle:{
        fontSize: 14,
        fontWeight: '500',
        color: Colors.indigo,
        marginBottom: 16
    },
    uploadContainer:{
        width: 100, 
        height: 100,
        borderRadius: 8, 
        borderWidth: 1,
        borderColor: Colors.grey,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 8
    },
    uploadCircle:{
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: Colors.lightGrey,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadPlus: {
        color: Colors.white,
        fontSize: 28,
        marginTop: -4,
    },
    imageContainer:{
       flexDirection: 'row',
       marginRight: 8,
       marginTop: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8, 
    },
    delete:{
        width: 24,
        height: 24,
        marginLeft: -16,
        marginTop: -10
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBottom: 20
    },
    textArea:{
        minHeight: 150,
        paddingTop: 16
    },
    button: {
        marginBottom: 100
    }
})