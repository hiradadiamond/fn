import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        justifyContent: 'space-between',
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
        marginVertical: 16,
        borderRadius: 4,
    },
    title:{
        fontSize: 18,
        fontWeight:'bold',
        color: Colors.indigo,
    },
    subTitle:{
        marginTop: 6,
        fontSize:12,
        color: Colors.grey
    },
    arrow:{
        width: 32,
        height: 32
    }
})