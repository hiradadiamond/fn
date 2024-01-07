import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        margin: 8,
        paddingVertical: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderColor
    },
    image:{
        width: 100,
        height : 100,
        borderRadius: 10,
        marginRight: 20
    },
    content:{
        flex: 1
    },
    title: {
        color: Colors.textGrey,
        paddingVertical: 5,
    },
    price:{
        color: Colors.black,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    date:{
        color: Colors.black,
        paddingVertical: 2,
    },
    time:{

        color: Colors.black,
        paddingBottom: 8
    },
    icon:{
        width: 24,
        height: 24,
        marginLeft: 8
    }
})