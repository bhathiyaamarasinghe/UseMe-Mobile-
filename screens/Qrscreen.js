
import React from 'react';
import { Button, View, Text,SafeAreaView,StyleSheet } from 'react-native';

import QRCode from 'react-native-qrcode-svg';
const Qrscreen = ({navigation}) => {

  state = {
    text: '5555',
  };



    return (
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <Text style={styles.titleStyle}>
          Thank You......!
          
        </Text>
        <Text style={styles.titleStyle}>
          
          see your QR Code here
        </Text>
        <QRCode
          
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
          
          size={250}
         
          color="black"
         
          backgroundColor="white"
        
          logoSize={30}
          
          logoMargin={2}
        
          logoBorderRadius={15}
       
          logoBackgroundColor="yellow"
        />
        




        
      </View>
    </SafeAreaView>
    );
  
}; export default Qrscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});


