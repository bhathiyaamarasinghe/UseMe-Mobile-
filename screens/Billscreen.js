

import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, onChangeText, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
//import { AuthContext } from '../components/context';
import { BaseUrl } from '../components/serviceUrls';
import { header2 } from '../env';
import axios from 'axios';
import PayPal from 'react-native-paypal-wrapper';
import AsyncStorage from '@react-native-community/async-storage';

const Billscreen = ({ navigation }) => {

  const [data, setData] = React.useState({

    address: '',
    mobile: '',
    email: '',

  });

  const [Cart, setCart] = useState();


  useEffect(async () => {
    await axios({
      method: "get",
      url: BaseUrl + `/api/cart/`,
      headers: {
        Authorization: `token ${await AsyncStorage.getItem('token')}`
      }
    }).then(res => {
      console.log(res.data);

      console.log('setid', res.data[0].customer.id);
      const cartnum = res.data[0].customer.id
      console.log(cartnum);
      setCart(cartnum);
      //  console.log('cart',Cart);

    })
  }, []);



  const ppaypal = () => {
    PayPal.initialize(PayPal.SANDBOX, 'AbyfNDFV53djg6w4yYgiug_JaDfBSUiYI7o6NM9HE1CQ_qk9XxbUX0nwcPXXQHaNAWYtDfphQtWB3q4R'); // 3 enviroments - NO_NETWORK, SANDBOX, PRODUCTION
    PayPal.pay({
      price: '42.00',
      currency: 'USD',
      description: 'Total Order',
      merchantName: 'PAYPAL',
      merchantPrivacyPolicyUri: 'http://your-url.com/policy',
      merchantUserAgreementUri: 'http://your-url.com/legal',
      scopes: [
        PayPal.SCOPE_PROFILE,
        PayPal.SCOPE_PAYPAL_ATTRIBUTES,
        PayPal.SCOPE_EMAIL,
        PayPal.SCOPE_ADDRESS,
        PayPal.SCOPE_PHONE
      ]
    }).then(function (payment, confirm) {
      sendPaymentToConfirmInServer(payment, confirm);
    })
      .catch(function (error_code) {
        if (error_code == PayPal.USER_CANCELLED) {

        } else if (error_code == PayPal.INVALID_CONFIG) {

        }
      })

  }

  const handlesubmit = async () => {

    console.log('cartnum', Cart);

    console.log("submit");
    if (data.address.length === 0 || data.email.length == 0 ||  data.mobile.length == 0) {
      alert("Can't provide empty credentials")
    }
     else {
      await axios({
        method: "post",
        url: BaseUrl + `/api/orders/`,
        headers: {
          Authorization: `token ${await AsyncStorage.getItem('token')}`
        },
        data: {
          "cartId": Cart,
          "address": data.address,
          "mobile": data.mobile,
          "email": data.email
        }
      }).then(res => {
        console.log(res.data);
        alert(res.data["message"])
      })
    }
  }

  return (

    <View style={styles.container}>

      <View style={{ paddingTop: 20, paddingLeft: 10, paddingBottom: 10 }}>

        <TextInput

          style={styles.input}
          placeholder="Enter Your Address"
          value={data.address}
          onChangeText={(address) => setData({ ...data.address })}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Mobile"
          keyboardType="numeric"
          value={data.mobile}
          onChangeText={(mobile) => setData({ ...data.mobile })}

        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          value={data.email}
          onChangeText={(email) => setData({ ...data.email })}

        />

        <TouchableOpacity
          style={{ backgroundColor: 'black', width: 200, height: 30, borderRadius: 5, marginLeft: 75, alignItems: 'center', marginTop: 15, paddingTop: 5 }}
          onPress={() => handlesubmit()}>
          <Text style={{ color: 'white' }}>submit</Text>
        </TouchableOpacity>

      </View>

      <View style={{ height: 40 }}></View>

      <View>
        <TouchableOpacity
          onPress={() => ppaypal()}
          style={styles.paycash}
        >
          <Text style={{ color: 'black', marginTop: 10, marginBottom: 5, marginLeft: 5, marginRight: 5, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Pay with paypal</Text>
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
          <Text style={{ color: 'black', marginTop: 10, marginBottom: 5, marginLeft: 5, marginRight: 5, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>pay with stripe</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 20 }}></View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Qrscreen')}
          style={styles.payonline} >
          <Text style={{ color: 'black', marginTop: 8, marginBottom: 5, marginLeft: 5, marginRight: 5, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Pay By cash</Text>
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
  payonline: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#FFC300',
    marginLeft: 20,
    height: 50
  },

  paystr: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#FFC300',
    marginLeft: 20,
    height: 50
  },
  paycash: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#FFC300',
    marginLeft: 20,
    height: 50
  }


});




