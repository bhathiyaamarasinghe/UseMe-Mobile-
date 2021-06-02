
import React, { Component } from 'react';
import axios from 'axios';
import Geocoder from 'react-native-geocoding';
import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants"
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
import { BaseUrl, key } from '../components/serviceUrls';
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
    state = {
        cords: [],
        lat: "",
        lng: "",
        
       
    }
    

   

    componentDidMount() {
        axios.get(BaseUrl + `/api/seller/`)
            .then(res => {
                const cords = res.data;
                this.setState({ cords });
                // console.log({ cords })
            })
    }

    zoomIn = () => {
        let newRegion = {
            latitude: this.state.lat,
            longitude: this.state.lng,
            latitudeDelta: ( Math.abs( this.state.lat- 6.8523) * 2) / 2,
            longitudeDelta: (Math.abs(this.state.lng - 79.8526) * 2) / 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    zoomOut = () => {
        let newRegion = {
            latitude: this.state.lat,
            longitude: this.state.lng,
            latitudeDelta: ( Math.abs( this.state.lat- 6.8523) * 2) / 2,
            longitudeDelta: (Math.abs(this.state.lng - 79.8526) * 2) / 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }
    getdistance = async () => {
        await axios({
            method: "get",
            url: BaseUrl + `/api/distance/`
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




    address = (data) => {
        console.log(data.description);
        Geocoder.init(key);
        Geocoder.from(data.description)
            .then(json => {
                var location = json.results[0].geometry.location;
                this.state.lat = location.lat,
                    this.state.lng = location.lng
                //  console.log('lat',this.state.lat);
                //  console.log('lat',this.state.lng);
                axios.post(BaseUrl + '/api/user/', {
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
                        longitude: 79.8997,
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
                        onPress={(data) => this.address(data)}
                        query={{
                            key: key,
                            language: 'en',
                        }}
                    />

                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: SIZES.height * 0.35,
                        right: SIZES.padding * 2,
                        width: 60,
                        height: 130,
                        justifyContent: 'space-between'
                    }}
                >
                    {/* Zoom In */}
                    <TouchableOpacity
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => this.zoomIn}
                    >
                        <Text style={{ ...FONTS.body1 }}>+</Text>
                    </TouchableOpacity>

                    {/* Zoom Out */}
                    <TouchableOpacity
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => this.zoomOut}
                    >
                        <Text style={{ ...FONTS.body1 }}>-</Text>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity
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

                    </TouchableOpacity> */}




                <View
                    style={{
                        position: 'absolute',
                        bottom: 50,
                        left: 0,
                        right: 0,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            width: SIZES.width * 0.9,
                            paddingVertical: SIZES.padding * 3,
                            paddingHorizontal: SIZES.padding * 2,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.white
                        }}
                    >
                       

                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: SIZES.padding * 2,
                                justifyContent: 'space-between'
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    height: 50,
                                    marginRight: 10,
                                    backgroundColor: COLORS.primary,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10
                                }}
                            // onPress={() => navigation.navigate("Home")}
                            onPress={() => this.getdistance()}
                            >
                                <Text style={{ ...FONTS.h4, color: COLORS.white }}>Deliver</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    height: 50,
                                    backgroundColor: COLORS.secondary,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10
                                }}
                                onPress={() => navigation.navigate('Billscreen')}
                            >
                                <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>


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
        alignSelf: 'center',
        position: 'absolute'
    }
});

// import React from "react";
// import {
//     View,
//     Text,
//     Image,
//     TouchableOpacity
// } from "react-native";
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import MapViewDirections from "react-native-maps-directions";

// import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants"

// const ExploreScreen = ({ navigation }) => {

//     const mapView = React.useRef()

//     const [restaurant, setRestaurant] = React.useState(null)
//     const [streetName, setStreetName] = React.useState("")
//     const [fromLocation, setFromLocation] = React.useState(null)
//     const [toLocation, setToLocation] = React.useState(null)
//     const [region, setRegion] = React.useState(null)

//     const [duration, setDuration] = React.useState(0)
//     const [isReady, setIsReady] = React.useState(false)
//     const [angle, setAngle] = React.useState(0)

//     React.useEffect(() => {
//         // let { restaurant, currentLocation } = route.params;

//         let fromLoc ={
//             latitude: 6.7568,
//             longitude: 80.3638
//         }
//         let toLoc = {
//             latitude: 6.9496,
//             longitude: 79.3638
//         }
//         let street = "colombo"

//         let mapRegion = {
//             latitude: (fromLoc.latitude + toLoc.latitude) / 2,
//             longitude: (fromLoc.longitude + toLoc.longitude) / 2,
//             latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
//             longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
//         }

//         setRestaurant(restaurant)
//         setStreetName(street)
//         setFromLocation(fromLoc)
//         setToLocation(toLoc)
//         setRegion(mapRegion)

//     }, [])

//     const calculateAngle =(coordinates) => {
//         let startLat = coordinates[0]["latitude"]
//         let startLng = coordinates[0]["longitude"]
//         let endLat = coordinates[1]["latitude"]
//         let endLng = coordinates[1]["longitude"]
//         let dx = endLat - startLat
//         let dy = endLng - startLng

//         return Math.atan2(dy, dx) * 180 / Math.PI
//     }

//     const zoomIn = () => {
//         let newRegion = {
//             latitude: region.latitude,
//             longitude: region.longitude,
//             latitudeDelta: region.latitudeDelta / 2,
//             longitudeDelta: region.longitudeDelta / 2
//         }

//         setRegion(newRegion)
//         mapView.current.animateToRegion(newRegion, 200)
//     }

//     const  zoomOut = ()=> {
//         let newRegion = {
//             latitude: region.latitude,
//             longitude: region.longitude,
//             latitudeDelta: region.latitudeDelta * 2,
//             longitudeDelta: region.longitudeDelta * 2
//         }

//         setRegion(newRegion)
//         mapView.current.animateToRegion(newRegion, 200)
//     }

//     const renderMap = () => {
//         const destinationMarker = () => (
//             <Marker
//                 coordinate={toLocation}
//             >
//                 <View
//                     style={{
//                         height: 40,
//                         width: 40,
//                         borderRadius: 20,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: COLORS.white
//                     }}
//                 >
//                     <View
//                         style={{
//                             height: 30,
//                             width: 30,
//                             borderRadius: 15,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             backgroundColor: COLORS.primary
//                         }}
//                     >
//                         <Image
//                             source={icons.pin}
//                             style={{
//                                 width: 25,
//                                 height: 25,
//                                 tintColor: COLORS.white
//                             }}
//                         />
//                     </View>
//                 </View>
//             </Marker>
//         )

//         const carIcon = () => (
//             <Marker
//                 coordinate={fromLocation}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 flat={true}
//                 rotation={angle}
//             >
//                 <Image
//                     source={icons.car}
//                     style={{
//                         width: 40,
//                         height: 40
//                     }}
//                 />
//             </Marker>
//         )

//         return (
//             <View style={{ flex: 1 }}>
//                 <MapView
//                     ref={mapView}
//                     provider={PROVIDER_GOOGLE}
//                     initialRegion={region}
//                     style={{ flex: 1 }}
//                 >
//                     <MapViewDirections
//                         origin={fromLocation}
//                         destination={toLocation}
//                         apikey={GOOGLE_API_KEY}
//                         strokeWidth={5}
//                         strokeColor={COLORS.primary}
//                         optimizeWaypoints={true}
//                         onReady={result => {
//                             setDuration(result.duration)

//                             if (!isReady) {
//                                 // Fit route into maps
//                                 mapView.current.fitToCoordinates(result.coordinates, {
//                                     edgePadding: {
//                                         right: (SIZES.width / 20),
//                                         bottom: (SIZES.height / 4),
//                                         left: (SIZES.width / 20),
//                                         top: (SIZES.height / 8)
//                                     }
//                                 })

//                                 // Reposition the car
//                                 let nextLoc = {
//                                     latitude: result.coordinates[0]["latitude"],
//                                     longitude: result.coordinates[0]["longitude"]
//                                 }

//                                 if (result.coordinates.length >= 2) {
//                                     let angle = calculateAngle(result.coordinates)
//                                     setAngle(angle)
//                                 }

//                                 setFromLocation(nextLoc)
//                                 setIsReady(true)
//                             }
//                         }}
//                     />
//                     {destinationMarker()}
//                     {carIcon()}
//                 </MapView>
//             </View>
//         )
//     }

//     const renderDestinationHeader =() => {
//         return (
//             <View
//                 style={{
//                     position: 'absolute',
//                     top: 50,
//                     left: 0,
//                     right: 0,
//                     height: 50,
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}
//             >
//                 <View
//                     style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         width: SIZES.width * 0.9,
//                         paddingVertical: SIZES.padding,
//                         paddingHorizontal: SIZES.padding * 2,
//                         borderRadius: SIZES.radius,
//                         backgroundColor: COLORS.white
//                     }}
//                 >
//                     <Image
//                         source={icons.red_pin}
//                         style={{
//                             width: 30,
//                             height: 30,
//                             marginRight: SIZES.padding
//                         }}
//                     />

//                     <View style={{ flex: 1 }}>
//                         <Text style={{ ...FONTS.body3 }}>{streetName}</Text>
//                     </View>

//                     <Text style={{ ...FONTS.body3 }}>{Math.ceil(duration)} mins</Text>
//                 </View>
//             </View>
//         )
//     }

//      const renderDeliveryInfo = () => {
//         return (
//             <View
//                 style={{
//                     position: 'absolute',
//                     bottom: 50,
//                     left: 0,
//                     right: 0,
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}
//             >
//                 <View
//                     style={{
//                         width: SIZES.width * 0.9,
//                         paddingVertical: SIZES.padding * 3,
//                         paddingHorizontal: SIZES.padding * 2,
//                         borderRadius: SIZES.radius,
//                         backgroundColor: COLORS.white
//                     }}
//                 >
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         {/* Avatar */}
//                         <Image
//                             source={restaurant?.courier.avatar}
//                             style={{
//                                 width: 50,
//                                 height: 50,
//                                 borderRadius: 25
//                             }}
//                         />

//                         <View style={{ flex: 1, marginLeft: SIZES.padding }}>
//                             {/* Name & Rating */}
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                                 <Text style={{ ...FONTS.h4 }}>{restaurant?.courier.name}</Text>
//                                 <View style={{ flexDirection: 'row' }}>
//                                     <Image
//                                         source={icons.star}
//                                         style={{ width: 18, height: 18, tintColor: COLORS.primary, marginRight: SIZES.padding }}
//                                     />
//                                     <Text style={{ ...FONTS.body3 }}>{restaurant?.rating}</Text>
//                                 </View>
//                             </View>

//                             {/* Restaurant */}
//                             <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{restaurant?.name}</Text>
//                         </View>
//                     </View>

//                     {/* Buttons */}
//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             marginTop: SIZES.padding * 2,
//                             justifyContent: 'space-between'
//                         }}
//                     >
//                         <TouchableOpacity
//                             style={{
//                                 flex: 1,
//                                 height: 50,
//                                 marginRight: 10,
//                                 backgroundColor: COLORS.primary,
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 borderRadius: 10
//                             }}
//                             onPress={() => navigation.navigate("Home")}
//                         >
//                             <Text style={{ ...FONTS.h4, color: COLORS.white }}>Call</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={{
//                                 flex: 1,
//                                 height: 50,
//                                 backgroundColor: COLORS.secondary,
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 borderRadius: 10
//                             }}
//                             onPress={() => navigation.goBack()}
//                         >
//                             <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
//                         </TouchableOpacity>
//                     </View>

//                 </View>
//             </View>
//         )
//     }

//     const renderButtons = ()  =>{
//         return (
//             <View
//                 style={{
//                     position: 'absolute',
//                     bottom: SIZES.height * 0.35,
//                     right: SIZES.padding * 2,
//                     width: 60,
//                     height: 130,
//                     justifyContent: 'space-between'
//                 }}
//             >
//                 {/* Zoom In */}
//                 <TouchableOpacity
//                     style={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: 30,
//                         backgroundColor: COLORS.white,
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}
//                     onPress={() => zoomIn()}
//                 >
//                     <Text style={{ ...FONTS.body1 }}>+</Text>
//                 </TouchableOpacity>

//                 {/* Zoom Out */}
//                 <TouchableOpacity
//                     style={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: 30,
//                         backgroundColor: COLORS.white,
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}
//                     onPress={() => zoomOut()}
//                 >
//                     <Text style={{ ...FONTS.body1 }}>-</Text>
//                 </TouchableOpacity>
//             </View>

//         )
//     }

//     return (
//         <View style={{ flex: 1 }}>
//             {renderMap()}
//             {renderDestinationHeader()}
//             {renderDeliveryInfo()}
//             {renderButtons()}
//         </View>
//     )
// }

// export default ExploreScreen;