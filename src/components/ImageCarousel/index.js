import React, { useState } from "react"
import { FlatList, Image, View, Dimensions } from 'react-native';
import {styles} from './styles';
import Input from "../Input";
import { act } from "react-test-renderer";
 
const { width } = Dimensions.get('window');
const ImageCarousel = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);
   
    const handleScrollEnd = (e) => {
       const horizontalOffset = e.nativeEvent.contentOffset.x;
       const index = Math.round(horizontalOffset / width ) ;
       setActiveIndex(index);
    }
    const renderImage = ({ item }) => {
        return (<Image style={styles.imageCarousel} source={{uri: item}}  />)
    }
    return (
        <View>
            <FlatList horizontal pagingEnabled data={images} renderItem={renderImage}  onMomentumScrollEnd={handleScrollEnd}/>
            <View style={styles.pagination}>
                {images?.map((_, i) => (
                    <View key={i} style={[styles.paginationLine, i === activeIndex? styles.activeLine: {}]} ></View>
                ))}
            </View>
        </View>
    )
}

export default React.memo(ImageCarousel);