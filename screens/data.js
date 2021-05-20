import React from 'react';
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

const Images = [
    {image: require('../assets/s1.jpg')},
    {image: require('../assets/s2.jpg')},
    {image: require('../assets/s3.jpg')},
    {image: require('../assets/s4.jpg')},
    {image: require('../assets/s5.jpg')},
    {image: require('../assets/gifts.jpg')},
    {image: require('../assets/fslide1.jpg')},
    {image: require('../assets/fslide2.jpg')},
    {image: require('../assets/fslide3.jpg')},
  ];
  
  export const data = [
    
    {
      id: '1',
      coordinate: {
        latitude: 6.8018,
        longitude: 79.9227,
      },
      title: 'Amazing Food Place',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[0].image,
      rating: 4,
      reviews: 99,
      categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
      id: '2',
      coordinate: {
        latitude: 6.7881,
        longitude: 79.8913,
      },
      title: 'Burgger',
      description: ` ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[1].image,
      rating: 5,
      reviews: 102,
      categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
    {
      id: '3',
      coordinate: {
        latitude: 6.8015,
        longitude: 79.8997,
      },
      title: 'Third Amazing Food Place',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[2].image,
      rating: 3,
      reviews: 220,
      categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
      id: '4',
      coordinate: {
        latitude: 6.8301,
        longitude: 79.8801,
      },
      title: 'Fourth Amazing Food Place',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[3].image,
      rating: 4,
      reviews: 48,
      categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
    {
      id: '5',
      coordinate: {
        latitude: 6.8301,
        longitude: 79.8801,
      },
      title: 'Fifth Amazing Food Place',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[4].image,
      rating: 4,
      reviews: 178,
      categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
      id: '6',
      coordinate: {
        latitude: 6.9117,
        longitude: 79.8646,
      },
      title: 'Amazing Food Place',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[0].image,
      rating: 4,
      reviews: 99,
      categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
      id: '7',
      coordinate: {
        latitude: 6.8015,
        longitude: 79.8997,
      },
      title: 'Second ',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[6].image,
      rating: 5,
      reviews: 102,
      categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
    {
      id: '8',
      coordinate: {
        latitude: 6.8015,
        longitude: 79.8997,
      },
      title: 'Second Amazing Food Place',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[7].image,
      rating: 5,
      reviews: 200,
      categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
    {
      id: '9',
      coordinate: {
        latitude: 6.9117,
        longitude: 79.8646,
      },
      title: 'Second Amazing Food Place',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[8].image,
      rating: 5,
      reviews: 102,
      categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
  ];
  