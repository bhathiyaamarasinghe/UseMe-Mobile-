import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import Orderstable from './Orderstable';
import CategoryScreen from './Categoryproduct';
import ProductScreen from './ProductScreen';
import CustomerRegistrationScreen from './CustomerRegistrationScreen';
import Qrscreen from './Qrscreen';
import Billscreen from './Billscreen';
import ExploreScreen from './ExploreScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"

  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#251C23',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#251C23',
        tabBarIcon: ({ color }) => (
          <Icon name="person-circle-outline" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#251C23',
        tabBarIcon: ({ color }) => (
          <Icon name="globe-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="pay"
      component={Orderstable}
      options={{
        tabBarLabel: 'pay',
        tabBarColor: '#251C23',
        tabBarIcon: ({ color }) => (
          <Icon name="cart" color={color} size={26} />

        ),
      }}
    />


  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (

  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#251C23',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>

    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Choose a Category Here',
      headerLeft: () => (
        <Icon.Button name='md-menu'
          size={25}
          backgroundColor='#251C23'
          onPress={() => navigation.openDrawer()}>
        </Icon.Button>
      )
    }} />
    
   

    <HomeStack.Screen
      name='CategoryScreen'
      component={CategoryScreen}
      options={{


      }}
    />

    <HomeStack.Screen
      name='Qrscreen'
      component={Qrscreen}
      options={{

        // headerRight: () => (
        //   <Icon.Button name='search-outline'
        //     size={25}
        //     backgroundColor='#251C23'
        //     onPress={() => navigation.openDrawer()}>
        //   </Icon.Button>
        // )
      }}
    />

    <HomeStack.Screen
      name='Billscreen'
      component={Billscreen}
      options={{

        // headerRight: () => (
        //   <Icon.Button name='search-outline'
        //     size={25}
        //     backgroundColor='#251C23'
        //     onPress={() => navigation.openDrawer()}>
        //   </Icon.Button>
        // )
      }}
    />


  </HomeStack.Navigator>
);



const DetailsStackScreen = ({ navigation }) => (

  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#251C23',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Notifications" component={DetailsScreen}
      options={{
        // headerLeft: () => (
        //   <Icon.Button name='reorder-three-outline'
        //     size={25}
        //     backgroundColor='#251C23'
        //     onPress={() => navigation.openDrawer()}>
        //   </Icon.Button>
        // )
      }} />

  </DetailsStack.Navigator>
);

