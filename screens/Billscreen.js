

// import React, { Component } from 'react';
// import { View, StyleSheet, Alert, useState, Dimensions, Text, CheckBox, isSelected, onRemove, MoreIcon, setSelection, TextInput, value, SafeAreaView, Image, TouchableOpacity, Button, editPost, deletePost } from 'react-native';
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
// import OptionsMenu from "react-native-option-menu";
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/Feather';




// var cardtype = [
//   { label: "visa card", value: 0 },
//   { label: "master card", value: 1 }


// ];


// var card = [
//   { label: "credit card", value: 0 },
//   { label: "debit card", value: 1 }


// ];




// export default class Billscreen extends Component {
//   constructor(props) {
//     super(props)
    
//     this.state = {
//       month: 'month',
//       year: 'year'
//     };


//   }
//   render() {
   

//     return (
   


//       <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
//         <View style={styles.textinput}>
//           <RadioForm
//             radio_props={cardtype}
//             initial={-1}
//             onPress={(value) => { }}
//             selectedLabelColor={"green"}


//             buttonSize={20}
//             selectedButtonColor={"green"}

//           />


//         </View>

//         <View style={styles.textinput}>
//           <Text style={styles.tee}>Card type</Text>
//           <RadioForm
//             radio_props={card}
//             initial={-1}
//             onPress={(value) => { }}
//             selectedLabelColor={"green"}


//             buttonSize={20}
//             selectedButtonColor={"green"}

//           />


//         </View>

//         <View style={styles.textinput}><Text style={styles.tee}>Card Number</Text>
//           <TextInput
//             style={{ height: 40, borderColor: 'grey', borderWidth: 1, textDecorationColor: 'blue', borderRadius: 10 }}
//             //onChangeText={text => onChangeText(text)}
//             //value={this.state.myNumber}
//             keyboardType='numeric'
//             value={value}
//             maxLength={16}
//             placeholderTextColor="#60605e"
//           />
//         </View>



//         <Text style={styles.tee}>Expiration Date</Text>

//         <View style={{ marginLeft: 10, marginBottom: 10, marginTop: 10, flexDirection: 'row' }}>


//           <DropDownPicker
//             items={[
//               { label: 'year', value: 'year' },
//               { label: '2021', value: '2021' },
//               //{label: '2021', value: '2021', hidden: true},
//               { label: '2022', value: '2022' },
//               { label: '2023', value: '2023' },
//               { label: '2024', value: '2024' },
//               { label: '2025', value: '2025' },
//             ]}
//             defaultValue={this.state.year}
//             containerStyle={{ height: 40, width: 100 }}
//             style={{ backgroundColor: '#fafafa' }}
//             itemStyle={{
//               justifyContent: 'flex-start'
//             }}
//             dropDownStyle={{ backgroundColor: '#fafafa' }}
//             onChangeItem={item => this.setState({
//               year: item.value
//             })}
//           />

//           <View style={{ height: 10 }}><Text>                 </Text></View>
//           <DropDownPicker
//             items={[
//               { label: 'month', value: 'month' },
//               { label: '01', value: '01' },
//               //{label: '2021', value: '2021', hidden: true},
//               { label: '02', value: '02' },
//               { label: '03', value: '03' },
//               { label: '04', value: '04' },
//               { label: '05', value: '05' },
//               { label: '06', value: '06' },
//               { label: '07', value: '07' },
//               { label: '08', value: '08' },
//               { label: '09', value: '09' },
//               { label: '10', value: '10' },
//               { label: '11', value: '11' },
//               { label: '12', value: '12' }
//             ]}
//             defaultValue={this.state.month}
//             containerStyle={{ height: 40, width: 100 }}
//             style={{ backgroundColor: '#fafafa' }}
//             itemStyle={{
//               justifyContent: 'flex-start'
//             }}
//             dropDownStyle={{ backgroundColor: '#fafafa' }}
//             onChangeItem={item => this.setState({
//               month: item.value
//             })}
//           />

//         </View>







//         <View style={styles.textinput}>
//           <Text style={styles.tee}>CVN</Text>

//           <Text style={{ color: "#0E0476" }}>This code is a three or four digit number printed on the back or front of  credit cards</Text>
//           <TextInput
//             style={{ height: 40, borderColor: 'grey', borderWidth: 1, width: 50, borderRadius: 10 }}
//             //onChangeText={text => onChangeText(text)}
//             value={value}
//             keyboardType='numeric'
//             //value={value}
//             maxLength={3}
//             placeholderTextColor="#60605e"
//           />



//           <View><Text></Text></View>
//         </View>










//         <View style={{ flexDirection: 'row', marginTop: 45 }}>
//           <View>
//             <TouchableOpacity
//               onPress={() => navigation.navigate('SignUpScreen')}
//               style={styles.cancel}
//             >
//               <Text style={{ color: '#fff', marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5 }}>cancel payment</Text>
//             </TouchableOpacity>


//           </View>





//           <View>
//             <TouchableOpacity
//               onPress={() => this.props.navigation.navigate('Qrscreen')}
//               style={styles.pay} >
//               <Text style={{ color: '#fff', marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5 }}>pay</Text>
//             </TouchableOpacity>
//           </View>



//         </View>







//       </View>





//     );
//   };


// }


// const styles = StyleSheet.create({
//   scene: {
//     flex: 1,
//   },
//   tee: { fontSize: 15, fontWeight: 'bold', color: '#003399' },

//   image: {
//     width: 124, height: 121, borderRadius: 20, alignItems: 'center',
//     justifyContent: 'center', marginLeft: 30, marginTop: 30,
//   },





//   images: {
//     width: 124, height: 121, borderRadius: 20, alignItems: 'center'
//     , marginLeft: 30, marginTop: 40,
//   },

//   c: { marginTop: 32 },

//   titleSelection: {




//     marginLeft: 16,
//     backgroundColor: '#808080',
//     marginRight: 10,
//   },




//   imon: {
//     width: 124,
//     height: 121,
//   },
//   imtw: {
//     width: 124,
//     height: 121,
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//     fontSize: 17,

//   },
//   cardPrice: {
//     fontSize: 15,
//     color: '#444',
//     fontWeight: 'bold',
//   },


//   green: { alignItems: 'center', marginTop: 40, },
//   total: { backgroundColor: '#0099FF', height: 50, width: 300, alignContent: 'center', marginLeft: 50, marginBottom: 90, borderRadius: 20, alignItems: 'center' },
//   totaltext: { fontSize: 22, fontWeight: 'bold' },
//   checkout: { backgroundColor: '#0099FF', height: 50, marginBottom: 10 },
//   textinput: { marginLeft: 10, marginBottom: 10, marginTop: 10 },
//   cancel: { marginLeft: 10, width: 100, color: '#003399' },
//   pay: { marginLeft: 10, width: 100, marginRight: 10, color: '#003399' },





//   cancel: { borderWidth: 1, borderColor: '#2c3e50', backgroundColor: '#062157', marginRight: 60 },


//   pay: { borderWidth: 1, borderColor: '#2c3e50', backgroundColor: '#062157', marginLeft: 150, width: 100, alignItems: 'center' }

// },







// );

import React, { Component } from 'react';
import { StyleSheet, View,Text   ,Button,TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';


import PayPal from 'react-native-paypal-wrapper';

export default class Orderstable extends Component {
    

    ppaypal() {
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

   onPressPaypal = async () => {
    // const {deviceData} = await requestDeviceData(token);

    const response = await requestBillingAgreement(token, {
      billingAgreementDescription: 'Your agreement description', // required
      currency: 'GBP',
      localeCode: 'en_GB',
    });

    await console.log({response});
  };
   
    render() {
      //const state = this.state;
      return (
  
        
        
        <View style={styles.container}>
        
         
        
          
          
  <View>
          <TouchableOpacity
                      //onPress={() => this.props.navigation.navigate('Billscreen')}
                      onPress={() => this.ppaypal()}
                      //onPress={() => this.props.navigation.navigate('Billscreen')}
                      style={styles.paycash}
                      >
                        <Text style={{ color:'#fff',marginTop:10,marginBottom:5,marginLeft:5,marginRight:5,textAlign:'center',fontStyle: 'italic',fontWeight: 'bold',fontSize:20}}>Pay with paypal</Text>
                      </TouchableOpacity>
  
  
                      </View>
                      <View style={{height:20}}>
                        
                      </View>




                      {/* <View>
          <TouchableOpacity
                      //onPress={() => this.props.navigation.navigate('Billscreen')}
                      onPress={() => onPressPaypal()}
                      //onPress={() => this.props.navigation.navigate('Billscreen')}
                      style={styles.paycash}
                      >
                        <Text style={{ color:'#fff',marginTop:10,marginBottom:5,marginLeft:5,marginRight:5,textAlign:'center',fontStyle: 'italic',fontWeight: 'bold',fontSize:20}}>Pay with paypal sandbox</Text>
                      </TouchableOpacity>
  
  
                      </View> */}





                      <View style={{height:20}}>
                        
                      </View>
           
  <View>
  <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Qrscreen')}
                      style={styles.payonline} >
                        <Text   style={{ color:'#fff',marginTop:10,marginBottom:5,marginLeft:5,marginRight:5,textAlign:'center',fontStyle: 'italic',fontWeight: 'bold',fontSize:20}}>Order now</Text>
                      </TouchableOpacity>
  </View> 
          
          
        
        </View>
      )
    }
  }
   
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 200, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#85C1E9' },
    text: { margin: 6 },
    //payonline:{borderWidth: 1,borderColor: '#2c3e50',backgroundColor:'#062157',marginRight:60},
    payonline:{borderWidth: 1,borderColor: '#28B463',backgroundColor:'#28B463',marginLeft:20,height:50},
  
    paycash:{borderWidth: 1,borderColor: '#2c3e50',backgroundColor:'#062157',marginLeft:20,height:50}
  });















