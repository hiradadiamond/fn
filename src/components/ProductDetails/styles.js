import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    image:{
        width: '100%',
        height: height * 0.45,
        margin: 8,
    },
    content:{
        backgroundColor: Colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24,
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500'
    },
    price: {    
        fontSize: 34,
        fontWeight: 'bold',
        marginVertical: 8
    },
    description: {
        color: Colors.textGrey,
        fontWeight: '300',
        marginVertical: 10
    },
    footer:{
        padding: 24,
        flexDirection: 'row'
    },
    bookmarkContainer:{
        backgroundColor: Colors.lightGrey,
        padding: 18,
        borderRadius: 8,
        marginRight: 16
    },
    bookmarkIcon:{
        width: 20,
        height: 20
    },
    backContainer:{
        backgroundColor: Colors.white,
        padding: 10,
        margin: 24,
        borderRadius: 8,
        position: 'absolute'
    },
    backIcon:{
        width: 20,
        height: 20
    }
})