import React, { useEffect, useState }  from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { categories } from "../../../data/categoires";
import { products } from "../../../data/products";
import CategoryBox from "../../../components/CategoryBox";
import ProductDetails from "../../../components/ProductDetails";
import ProductHomeItem from "../../../components/ProductHomeItem";


const Home = ({ navigation }) => {
    const [selectCategory, setSelectCategory] = useState();
    const [keyWord, setKeyWord] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if(selectCategory && !keyWord){
            const updatedProducts = products.filter(data => data?.id === selectCategory);
            setFilteredProducts(updatedProducts);
        } else if( selectCategory && keyWord) {
            const updatedProducts = products.filter(data => data?.id === selectCategory && data?.title?.toLowerCase().includes(keyWord?.toLowerCase));
            setFilteredProducts(updatedProducts);
        }else if( !selectCategory && keyWord) {
            const updatedProducts = products.filter(data => data?.title?.toLowerCase().includes(keyWord?.toLowerCase()));
            setFilteredProducts(updatedProducts);
        }
        else if(!keyWord && !selectCategory) {
            setFilteredProducts(products);
        }
        
    }, [selectCategory, keyWord])

    const renderCategoryItem = ({item, index}) => {
        return (
            <CategoryBox 
            onPress={() => setSelectCategory(item?.id)}
            isSelected={item?.id === selectCategory}
            isFirst ={ index === 0} 
            title={item?.title} 
            image={item?.image}
            />
        );
    }

    const renderProductItem = ({item, index}) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', { product });
        }
        return (        
        <ProductHomeItem onPress={()=> onProductPress(item)} {...item}/>)
    }
    return(
        <SafeAreaView>
            <Header  showSearch onSearch={setKeyWord} title="Find All you need"  keyWord={keyWord} />

             <FlatList 
             style={styles.list}
             showsHorizontalScrollIndicator={false}
             horizontal
             data={categories} 
             renderItem={renderCategoryItem} 
             keyExtractor={(item, index) => String(index)}
             />
             <FlatList 
                style={styles.productList}
                numColumns={2}
                data={filteredProducts} 
                renderItem={renderProductItem} 
                keyExtractor={(item, index) => String(item.id)}
                ListFooterComponent={<View style={{height: 2}}/>}
             />
        </SafeAreaView>
    );
}

export default Home;