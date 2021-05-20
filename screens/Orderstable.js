
import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import {
  requestOneTimePayment,
  requestBillingAgreement,
  requestDeviceData,
} from 'react-native-paypal';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
const Orderstable = props => {


  const [tableData, setTableData] = useState([]);
  const token = 'sandbox_mfxbm3gh_yj2ksb4s4x48hxrp';

  const onPressPaypal = async () => {
    // const {deviceData} = await requestDeviceData(token);

    const response = await requestBillingAgreement(token, {
      billingAgreementDescription: 'Your agreement description', // required
      currency: 'GBP',
      localeCode: 'en_GB',
    });

    await console.log({ response });

  };
  useEffect(() => {
    const getdata = async () => {
      await axios({
        method: "get",
        url: `http://192.168.8.101:8000/api/cart/`,
        headers: {
          Authorization: `token ${await AsyncStorage.getItem('token')}`
        }
      }).then(res => {
        console.log(res.data);
        setTableData(res.data)

      })
    }
    getdata()
  }, []
  )


  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#03112E' }}>
          See Your Bill Information Here
        </Text>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Item No</DataTable.Title>
          {/* <DataTable.Title>Item</DataTable.Title> */}
          <DataTable.Title>Price</DataTable.Title>
          <DataTable.Title>Qty</DataTable.Title>
          <DataTable.Title>Subtotal</DataTable.Title>
        </DataTable.Header>
            {/* table */}
        {
          tableData?.map((tdata, i) => {
            return (
              <View>
                <DataTable.Row key={i}>
              
                  <DataTable.Cell>{i + 1}</DataTable.Cell>
                  <DataTable.Cell>{tdata.cartproduct[0].price}</DataTable.Cell>
                  <DataTable.Cell>{tdata.cartproduct[0].quantity}</DataTable.Cell>
                  <DataTable.Cell>{tdata.cartproduct[0].subtotal}</DataTable.Cell>

                </DataTable.Row>

                <DataTable.Header>
                  <DataTable.Title>Total</DataTable.Title>
                  <DataTable.Title> </DataTable.Title>
                  <DataTable.Title> </DataTable.Title>
                  <DataTable.Title>{tdata.total}</DataTable.Title>
                </DataTable.Header>
              </View>
            )
          }



          )


        }



        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>

      <View style={{ flexDirection: 'row', marginTop: 45, backgroundColor: '#F1948A ' }}>
        <View>
          <TouchableOpacity

            //onPress={() => props.navigation.navigate('Billscreen')}
            onPress={() => onPressPaypal()}
            style={styles.pays}>
            <Text
              style={{
                color: '#fff',
                marginTop: 5,
                marginBottom: 5,
                marginLeft: 5,
                marginRight: 5,
                fontStyle: 'italic'
              }}>
              pay with paypal sandbox
            </Text>
          </TouchableOpacity>

        </View>
        <View>
          <TouchableOpacity

            onPress={() => props.navigation.navigate('Qrscreen')}
            //onPress={() => this.props.navigation.navigate('Qrscreen')}
            //onPress={() => onPressPaypal()}
            style={styles.pays}
          >
            <Text
              style={{
                color: '#fff',
                marginTop: 5,
                marginBottom: 5,
                marginLeft: 2,
                marginRight: 5,
                fontStyle: 'italic'
              }}>
              order now
            </Text>
          </TouchableOpacity>

        </View>

        <View style={{ marginLeft: 60 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Qrscreen')}
            style={styles.payonline}>
            <Text
              style={{
                color: '#fff',
                marginTop: 5,
                marginBottom: 5,
                marginLeft: 5,
                marginRight: 5,
                fontStyle: 'italic'
              }}>
              pay cash
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 15 }}></View>

      <View>
        <TouchableOpacity

          onPress={() => props.navigation.navigate('Billscreen')}
          //onPress={() => onPressPaypal()}
          style={styles.paycas}>
          <Text
            style={{
              color: '#fff',
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 5,
              marginRight: 5,
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
            pay with paypal
</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
};

export default Orderstable;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#85C1E9' },
  text: { margin: 6 },
  payonline: {
    borderWidth: 1,
    borderColor: '#2c3e50',
    backgroundColor: '#062157',
    marginRight: 10,
    marginLeft: 2,
  },

  paycash: {
    borderWidth: 1,
    borderColor: '#2c3e50',
    backgroundColor: '#062157',
    marginLeft: 2,
  },

  paycas: {
    borderWidth: 1,
    borderColor: '#935116',
    backgroundColor: '#935116',
    marginLeft: 2,
    marginRight: 140
  },



  pays: {
    borderWidth: 1,
    borderColor: '#3498DB',
    backgroundColor: '#3498DB',
    marginLeft: 2,
  },
});
















