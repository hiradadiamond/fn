import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    imageCarousel:{
        width: width, 
        height: height * 0.45,
    }, 
    list: {
       
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50, 
        alignSelf: 'center'
    },
    paginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: Colors.white,
        margin: 5
    },
    activeLine: {
    backgroundColor: Colors.black,
    width: 30
    }
})