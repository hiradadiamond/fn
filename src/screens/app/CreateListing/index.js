import React, {useState} from "react";
import { ScrollView, Text, View, Image, Pressable, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { launchImageLibrary } from "react-native-image-picker";
import Input from "../../../components/Input";
import { categories } from "../../../data/categoires";
import Button from "../../../components/common/Button";

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(false);
   const onBackPress = () => {
     navigation.goBack();
   }
   const uploadNewImage = async() => {
     setLoading(true);
     const result = await launchImageLibrary();
     console.log('result', result)
     if(result?.assets?.length){
        setImages(list=> ([...list, ...result?.assets]));
        setLoading(false);
     }
   }

   const onDeleteImage = (image) => {
        setImages(()=> {
            const filteredImages = images?.filter(img=> img.fileName !== image?.fileName);
            return filteredImages;
        })
   }

   const onChange = ( value, key ) => {
        setValues   ((val)=> ({...val, [key]: value}))
   }
   
   console.log('values--->', values)

    return(
        <SafeAreaView>
            <Header showBack={true} onBackPress={onBackPress} title="CreateListing"/>
                <ScrollView style={styles.container}>
                    <KeyboardAvoidingView behavior="position">
                        <Text style={styles.sectionTitle}>Upload Photos</Text> 
                        <View style={styles.imageRow}>
                            <TouchableOpacity disabled={loading} style={styles.uploadContainer}onPress={uploadNewImage}>
                                    <View style={styles.uploadCircle}>
                                        <Text style={styles.uploadPlus}>+</Text>
                                    </View>
                                </TouchableOpacity> 
                                {images?.map(image=> (
                                    <View style={styles.imageContainer}key={image?.fileName}>
                                    <Image  style={styles.image} source={{uri: image?.uri}}/>
                                    <Pressable hitSlop={20} style={styles.deleteContainer} onPress={()=> onDeleteImage(image)}>
                                        <Image style={styles.delete} source={require('../../../assets/close.png')}/>  
                                    </Pressable>
                                    </View>
                                ))}
                                {loading? <ActivityIndicator/> : null}
                        </View>  
                        <View>
                            <Input placeholder="Lisitng Title" label="Title" value={values.title} onChangeText={(v)=> onChange('title', v)}/> 
                            <Input placeholder="Select the category" label="Category" value={values.category} onChangeText={(v) => onChange(v, 'category')} type="picker" options={categories} />
                            <Input placeholder="Enter price in USD" label="Price" value={values.title} onChangeText={(v)=> onChange('price', v)} keyboardType="numeric"/> 
                            <Input style={styles.textArea} placeholder="Tell us more..." label="Description" value={values.title} onChangeText={(v)=> onChange('description', v)} multiline={true}/> 
                        </View> 
                    </KeyboardAvoidingView>                   
                    <Button title="Submit" style={styles.button} />                
                </ScrollView> 
        </SafeAreaView>
    );
}

export default CreateListing;