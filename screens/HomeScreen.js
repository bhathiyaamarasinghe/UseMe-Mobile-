import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import {BaseUrl} from '../components/serviceUrls';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
const HomeScreen = ({ navigation }) => {

  const [categoris, setCategoris] = useState(null);

  // const {colors}= useTheme();

  // const theme = useTheme();
  useEffect(() => {
    const getcategory = async () => {
      await axios({
        method: "get",
        url: BaseUrl+`/api/category/`
      }).then(response => {
        // console.log(response.data);
        setCategoris(response.data)
      })
    }
    getcategory()
  }, [])

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
     <View style={{flex:1,justifyContent:"center"}}>
      {
        categoris?.map((cata, i) => {
          return (
            <View>
             
              <TouchableOpacity
                       onPress={() => navigation.navigate('CategoryScreen',{id:cata.id})}
                       style={[styles.core, {
                           borderColor: 'black',
                           borderWidth: 1,
                           alignSelf:'center',
                           width:305,
                           marginTop: 10,
                           backgroundColor: '#FFC300'
                       }]}
                   >
                       <Text style={[styles.textSign,{
                           color: 'black'
                       }]}>{cata.title}</Text>
                   </TouchableOpacity>
              
            
            </View>
          )
        })
      }
      </View>
      </ScrollView>
    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  // sliderContainer: {
  //   height: 550,
  //   width: 340,
  //   marginTop: 10,
  //   marginLeft: 10,
  //   marginRight: 50,
  //   borderRadius: 8,
  //   justifyContent:"center",
    

  // },
  sliderContainer: {
    flex: 1, 
    alignSelf:'center'

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
  }, text_footer: {
    color: '#05375a',
    fontSize: 18,
    fontWeight: 'bold'
  },
  core: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
  fontSize: 18,
  fontWeight: 'bold'
}
});


