import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        padding: 24,
    },
    sectionHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 24,
        height: 24
    },
    sectionTitle:{
        fontSize: 16,
        fontWeight: '500',
        color: Colors.grey
    },
    item: {
        padding: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
        marginBottom: 16
    },
    button: {
        paddingVertical: 12,
        marginTop: 12
    }
})