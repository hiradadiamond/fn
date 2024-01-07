import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        margin: 8,
    },
    image:{
        borderRadius: 8,
        width: (width - 64) / 2,
        height : 220
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
    }
})