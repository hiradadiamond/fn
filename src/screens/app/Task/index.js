import React from "react";
import { ScrollView, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskItem from "../../../components/TaskItem";
import { products } from "../../../data/products";
import Header from "../../../components/Header";
import ProductDetails from "../../../components/ProductDetails";

const Task = ({navigation}) => {
    const renderItem = ({item}) => {
        const onTaskPress = () => {
            navigation.navigate('ProductDetails', { product: item });
        }
        return (<TaskItem onPress={()=> onTaskPress(item)}{...item}/>);
    }
    return (
        <SafeAreaView>
            <Header title="Favorites"/>
                <FlatList 
                 data = { products}
                 renderItem={renderItem}
                 keyExtractor={(item)=> String(item?.id)}
                />
        </SafeAreaView>
    )
}

export default Task;