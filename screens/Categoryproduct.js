import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    ScrollView,
    AsyncStorage
} from "react-native";
import Swiper from 'react-native-swiper';
import StarRating from '../screens/StarRating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { products, mapDarkStyle, mapStandardStyle } from '../model/allData';
import SearchInput, { createFilter } from 'react-native-search-filter';
import ProductScreen from '../screens/ProductScreen';
import {BaseUrl} from '../components/serviceUrls';

const CategoryScreen = ({ navigation,route }) => {

    // const { id } = useParams()
    const [cataproduct, setCataproduct] = useState([])
    const [categoryTitle,setCategoryTitle] =useState('')
    useEffect(() => {
          //console.warn(route.params.id)
        const getcategoridata = async () => {
            await axios({
                method: 'get',
                url: BaseUrl+`/api/category/${route.params?.id}/`
            }).then(response => {
                //  console.log("test",response.data[0]?.category_product.map(product=>product.title));
                // let dataset =response.data[0].category_product
                setCataproduct(response.data[0].category_product)
                setCategoryTitle(response.data[0]?.title)
            })
        }
        getcategoridata()

    }, [])

    const [state, setState] = React.useState('');

    const searchUpdated = (val) => {
        setState(val);
    }

    return (
       
        <View style={styles.sliderContainer}>
            <ScrollView>

                <Swiper autoplay height={200}>
                <View style={styles.slide}>
          <Image
            source={require('../assets/s1.jpg')}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/grosary.jpg')}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/s2.jpg')}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/s3.jpg')}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/s4.jpg')}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/s5.jpg')}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        </View>



                </Swiper>

                <View style={styles.searchBox}>
                    <SearchInput //
                        onChangeText={(term) => { searchUpdated(term) }}
                        style={{ flex: 1, padding: 0 }}
                        placeholder=".............................Search Here...................................."
                    />
                   
                    <Ionicons name="ios-search" size={30} />
                </View>

                <View>
                    <Text style={[styles.txtSign,{
                           color: 'black'
                       }]}>Category:{categoryTitle}</Text>
                            <View>
                             {
                                 cataproduct.filter(product=>JSON.stringify(product).toLowerCase().indexOf(state.toLowerCase())!==-1).
                                 map((product, i) => ( 
                              <ProductScreen item={product} key={i} />))
                             }
                            </View>
                </View>

            </ScrollView>
        </View> 
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({

    
    sliderContainer: {
        flex: 1, 
        alignSelf:'center'

    },
    txtSign: {
        fontSize: 28,
        fontWeight: 'bold'
      },

    searchBox: {
        position: 'absolute',
        //marginTop: Platform.OS === 'ios' ? 40 : 20, 
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '98%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 6,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8
    },
    LeftImageButton: {
        height: 100,
        width: 160,
        borderRadius: 8
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        fontWeight: 'bold'
    }, signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 115,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: 'white',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 17,

    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
    cardPrice: {
        fontSize: 15,
        color: '#444',
        fontWeight: 'bold',
    },
    signIn: {
        width: 80,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: -4
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold'
    },
    SubCatecory: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
    },
    button: {
        width: 20,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 50,
        flexDirection: 'row'
    },


});
