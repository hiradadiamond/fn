import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskItem from "../../../components/TaskItem";
import { products } from "../../../data/products";
import Header from "../../../components/Header";

const Task = ({navigation}) => {
    const renderItem = ({item}) => {
        const onTaskPress = () => {
            navigation.navigate('ProductDetails', { product: item });
        }
        return (<TaskItem icon={require("../../../assets/delete.png")}onPress={()=> onTaskPress(item)}{...item}/>);
    }
    return (
        <SafeAreaView>
            <Header title="Task Feed"/>
                <FlatList 
                 data = { products}
                 renderItem={renderItem}
                 keyExtractor={(item)=> String(item?.id)}
                />
        </SafeAreaView>
    )
}

export default Task;