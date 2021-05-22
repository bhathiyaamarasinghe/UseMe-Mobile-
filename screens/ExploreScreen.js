
import React, { Component } from 'react';
import axios from 'axios';
import Geocoder from 'react-native-geocoding';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  Button,
} from "react-native";
import {BaseUrl,key} from '../components/serviceUrls';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
class ExploreScreen extends Component {
  state = { cords: [],
  lat: "",
  lng: "" }

  componentDidMount() {
    axios.get(BaseUrl+`/api/seller/`)
      .then(res => {
        const cords = res.data;
        this.setState({ cords });
        // console.log({ cords })
      })
  }

  getdistance = async () => {
    await axios({
      method: "get",
      url: BaseUrl+`/api/distance/`
    }).then(response => {

      alert(response.data["message"])

    }).catch(error => console.error('Error', error))
  }




  mapMarkers = () => {
    return this.state.cords?.map((report) => <Marker
      key={report.id}
      coordinate={{ latitude: report.lat, longitude: report.lng }}
      title={report.seller_name}
    >
    </Marker >)
  }
  
 


  address = (data) =>{
    console.log(data.description);
    Geocoder.init(key); 
    Geocoder.from(data.description)
		.then(json => {
			var location = json.results[0].geometry.location;
		   this.state.lat=location.lat,
       this.state.lng=location.lng
      //  console.log('lat',this.state.lat);
      //  console.log('lat',this.state.lng);
       axios.post(BaseUrl+'/api/user/', {
        lat: this.state.lat,
        lng: this.state.lng,
     
      })
		})
		.catch(error => console.warn(error));
      
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          initialRegion={{
            latitude: 6.8015,
            longitude:79.8997,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
          zoom={8}
        >
          {this.mapMarkers()}
        </MapView>
        <View style={styles.searchBox}>
          <Ionicons name="ios-search" size={25} />

          <GooglePlacesAutocomplete
            placeholder='Search'
            // onPress={(data, details = null) => {
             
            //   console.log(data, details);
            // }}
            onPress = {(data) => this.address(data)}
            query={{
              key: key,
              language: 'en',
            }}
          />

        </View>
        
        <TouchableOpacity
          style={[styles.but, {
          
            borderColor: '#FFC300',
            borderWidth: 1,
            alignSelf:'center',
            width:355,
            marginTop: 10,
            backgroundColor: '#FFC300'
          }]}
          onPress={() => this.getdistance()}

        >
          <Text style={[styles.textSign, {
            color: 'black'
          }]}>Delivery Time </Text>

        </TouchableOpacity>
      </View>
    );
  }
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: "row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 2,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  but: {
    position: 'absolute',
    bottom: 10,
    height: 40,
    width: '40%',
    alignSelf: 'flex-end',
    borderRadius: 10,
  

  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  textSign: {
    fontSize: 20,
    alignSelf:'center',
    position:'absolute'
  }
});