import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Billscreen from '../screens/Billscreen';
import Qrscreen from '../screens/Qrscreen';
import stripe from '../screens/stripe';      
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import Orderstable from './Orderstable';
import CustomerRegistrationScreen from './CustomerRegistrationScreen';
import Terms from './Terms';
import ShopRegistrationScreen from './ShopRegistrationScreen';
import DeliveryPersonregistrationScreen from './DeliveryPersonregistrationScreen';
import MainTabScreen from './MainTabScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="Orderstable" component={Orderstable} />
        <RootStack.Screen name="Billscreen" component={Billscreen} />
        <RootStack.Screen name="stripe" component={stripe} />       
        <RootStack.Screen name="Qrscreen" component={Qrscreen} />
        <RootStack.Screen name="MainTabScreen" component={MainTabScreen} />
        <RootStack.Screen name="Mainscreen" component={MainTabScreen} />
        <RootStack.Screen name="CustomerRegistrationScreen" component={CustomerRegistrationScreen} />
        <RootStack.Screen name="Terms" component={Terms} />
        <RootStack.Screen name="ShopRegistrationScreen" component={ShopRegistrationScreen} />
        <RootStack.Screen name="DeliveryPersonregistrationScreen" component={DeliveryPersonregistrationScreen} />



    </RootStack.Navigator>
);

export default RootStackScreen;