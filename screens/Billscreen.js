


import React, { Component } from 'react';
import { StyleSheet, View, Text, onChangeText, Button, TextInput, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
//import { AuthContext } from '../components/context';
import { BaseUrl } from '../components/serviceUrls';
import { header2 } from '../env';
import axios from 'axios';
import PayPal from 'react-native-paypal-wrapper';
//import AsyncStorage from '@react-native-community/async-storage';
const Billscreen = ({ navigation }) => {




  const [data, setData] = React.useState({
    address: '',
    mobile: '',
    email: '',
    //check_textInputChange: false,setData
    //secureTextEntry: true,
    //confirm_secureTextEntry: true,
    //isValidUser: true,
    //isValidPassword: true,
    //isValidConfirmPassword: true,
    //isValidEmail: true
  });





  const ppaypal = () => {
    // var PayPal = require('react-native-paypal');
    PayPal.initialize(PayPal.SANDBOX, 'AbyfNDFV53djg6w4yYgiug_JaDfBSUiYI7o6NM9HE1CQ_qk9XxbUX0nwcPXXQHaNAWYtDfphQtWB3q4R'); // 3 enviroments - NO_NETWORK, SANDBOX, PRODUCTION
    PayPal.pay({
      //clientId: 'AbyfNDFV53djg6w4yYgiug_JaDfBSUiYI7o6NM9HE1CQ_qk9XxbUX0nwcPXXQHaNAWYtDfphQtWB3q4R',
      //environment: PayPal.SANDBOX,
      price: '42.00',
      currency: 'USD',
      description: 'Total Order',
      merchantName: 'PAYPAL',
      merchantPrivacyPolicyUri: 'http://your-url.com/policy',
      merchantUserAgreementUri: 'http://your-url.com/legal',
      scopes: [
        PayPal.SCOPE_PROFILE, // Full Name, Birth Date, Time Zone, Locale, Language 
        PayPal.SCOPE_PAYPAL_ATTRIBUTES, // Age Range, Account Status, Account Type, Account Creation Date 
        PayPal.SCOPE_EMAIL, // Email 
        PayPal.SCOPE_ADDRESS, // Address 
        PayPal.SCOPE_PHONE // Telephone 
      ]
    }).then(function (payment, confirm) {
      sendPaymentToConfirmInServer(payment, confirm);
    })
      .catch(function (error_code) {
        if (error_code == PayPal.USER_CANCELLED) {
          // User didn't complete the payment
        } else if (error_code == PayPal.INVALID_CONFIG) {
          // Invalid config was sent to PayPal
        }
      })

  }



  const handlesubmit = async () => {
    console.log("submit");

    if (!data.address.trim() || !data.mobile.trim() || !data.email.trim()) {

      alert('Please fill all the feilds and try again...');
      return;
    }
    else {

      await axios({
        method: "post",
        url: BaseUrl + `/api/orders/`,
        headers: header2,
        data: {
          "username": data.address,
          "password": data.mobile,
          "username": data.email
        }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          //console.log(error.response);
        });
    }





  };




  return (

    <View style={styles.container}>


      <View style={{ paddingTop: 20, paddingLeft: 10, paddingBottom: 10 }}>

        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}

          placeholder="enter your address here"
          value={data.address}
        //onChangeText={(val) => handlenameChange(val)}
        //onChangeText={data => setData(data)}

        />

        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          placeholder="enter your mobile here"
          keyboardType="numeric"
          value={data.mobile}
        //onChangeText={data => setData(data)}
        />

        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          placeholder="enter your email here"
          value={data.email}
        //onChangeText={data => setData(data)}
        />

        <TouchableOpacity
          style={{ backgroundColor: 'black', width: 200, height: 30, borderRadius: 5, marginLeft: 75, alignItems: 'center', marginTop: 15, paddingTop: 5 }}
          //onpress={() => submit()}
          onPress={() => handlesubmit()}>
          <Text style={{ color: 'white' }}>submit data</Text>
        </TouchableOpacity>

      </View>




      <View style={{ height: 40 }}></View>



      <View>
        <TouchableOpacity
          //onPress={() => this.props.navigation.navigate('Billscreen')}
          onPress={() => ppaypal()}
          //onPress={() => this.props.navigation.navigate('Billscreen')}
          style={styles.paycash}
        >
          <Text style={{ color: 'black', marginTop: 10, marginBottom: 5, marginLeft: 5, marginRight: 5, textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 }}>Pay with paypal</Text>
        </TouchableOpacity>


      </View>
      <View style={{ height: 10 }}>

      </View>










      <View style={{ height: 10 }}>

      </View>



      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('stripe')}
          style={styles.paystr} >
          <Text style={{ color: 'black', marginTop: 10, marginBottom: 5, marginLeft: 5, marginRight: 5, textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 }}>pay with stripe</Text>
        </TouchableOpacity>
      </View>






      <View style={{ height:20 }}></View>


      <View>
        <TouchableOpacity
          //onPress={() => this.props.navigation.navigate('Qrscreen')}
          onPress={() => navigation.navigate('Qrscreen')}
          style={styles.payonline} >
          <Text style={{ color: 'black', marginTop: 8, marginBottom: 5, marginLeft: 5, marginRight: 5, textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 }}>Pay By cash</Text>
        </TouchableOpacity>
      </View>



    </View>






















  );



};

export default Billscreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 20, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#85C1E9' },
  text: { margin: 6 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white'
  },
  //payonline:{borderWidth: 1,borderColor: '#2c3e50',backgroundColor:'#062157',marginRight:60},
  payonline: { borderRadius:15, borderWidth: 1, borderColor: 'black', backgroundColor: '#FFC300', marginLeft: 20, height: 50 },
  paystr: { borderRadius:15,borderWidth: 1, borderColor: 'black', backgroundColor: '#FFC300', marginLeft: 20, height: 50 },
  paycash: {borderRadius:15, borderWidth: 1, borderColor: 'black', backgroundColor: '#FFC300', marginLeft: 20, height: 50 }


});




