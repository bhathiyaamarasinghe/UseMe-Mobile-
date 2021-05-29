
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
import { BaseUrl } from '../components/serviceUrls';
import { DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-share';
import { AuthContext } from '../components/context';
const Orderstable = props => {

  const [tableData, setTableData] = useState([]);
  const [Data,setData] = useState([]);
  const [indexData] = useState([]);
  const token = 'sandbox_mfxbm3gh_yj2ksb4s4x48hxrp';
  const { cart } = React.useContext(AuthContext);
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
        url: BaseUrl + `/api/cart/`,
        headers: {
          Authorization: `token ${await AsyncStorage.getItem('token')}`
        }
      }).then(res => {
        console.log(res.data);
        setTableData(res.data);
        setData(res.data[0].cartproduct);
        //  console.log(res.data[0].cartproduct);
        
    
      })
      cart(getdata)
    }

    getdata()
  }, []
  )

  const updatecartproduct = async (id) => {
    await axios({
      method: 'post',
      url: BaseUrl + `/api/updatecartproduct/`,
      headers: {
        Authorization: `token ${await AsyncStorage.getItem('token')}`
      },
      data: { "id": id }
    }).then(response => {
      console.log(response);
      dispatch({
          // type: "RELOADING",
          // reloading: response
      })
    })
  }
  const editcartproduct = async (id) => {
    await axios({
      method: 'post',
      url: BaseUrl + `/api/editcartproduct/`,
      headers: {
        Authorization: `token ${await AsyncStorage.getItem('token')}`
      },
      data: { "id": id }
    }).then(response => {
      console.log(response);
      dispatch({
        // type: "RELOADING",
        // reloading: response
      })
    })
  }
  const delatecartproduct = async (id) => {
    await axios({
      method: 'post',
      url: `http://192.168.8.101:8000/api/delatecartproduct/`,
      headers: {
        Authorization: `token ${await AsyncStorage.getItem('token')}`
      },
      data: { "id": id }
    }).then(response => {
      console.log(response);
      dispatch({
        type: "RELOADING",
          reloading: response
      })
    })
  }
  const delatefullcard = async (id) => {
    await axios({
      method: 'post',
      url: BaseUrl + `/api/delatefullcart/`,
      headers: {
        Authorization: `token ${await AsyncStorage.getItem('token')}`
      },
      data: { "id": id }
    }).then(response => {
      console.log(response);
      // dispatch({
      //     type: "ADD_RELOADPAGE_DATA",
      //     reloadpage: response
      // })
      // dispatch({
      //     type: "ADD_CARTPRODUCT_UNCOMPLIT",
      //     cartproductf_uncomplit: null
      // })
      alert("Full Cart is Delated")
      // history.push('/')
    }).catch(error => {
      console.log(error);
    })
  }




  return (
    <ScrollView style={styles.container}>
        <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#03112E' }}>
                  Here is cart
                
                </Text>
              </View>
               
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Item No</DataTable.Title>
                  {/* <DataTable.Title>Item</DataTable.Title> */}
                  <DataTable.Title>Price</DataTable.Title>
                  <DataTable.Title>Qty</DataTable.Title>
                  <DataTable.Title>Subtotal</DataTable.Title>
                  <DataTable.Title>Action</DataTable.Title>

                </DataTable.Header>           

      {
        Data ?.map((tdata,i) => {
          return (
            <View>
      
                <DataTable.Row key={i}>

                  <DataTable.Cell>{i + 1}   </DataTable.Cell>
                   <DataTable.Cell>{tdata.price}   </DataTable.Cell> 
                   <DataTable.Cell>{tdata.quantity}   </DataTable.Cell>
                  <DataTable.Cell>{tdata.subtotal}    </DataTable.Cell> 
                  <DataTable.Cell>
                    <Text onPress={() => editcartproduct(tdata.id)} >-   </Text>
                    <Text onPress={() => delatecartproduct(tdata.id)} >R  </Text>
                    <Text onPress={() => updatecartproduct(tdata.id)} >+   </Text>

                  </DataTable.Cell>
                </DataTable.Row>

            </View>
          )
        }

        )

      }          
        {
        tableData ?.map((data) => {
          return (
            <View>
      
               
                <DataTable.Header>
                  <DataTable.Title>Total</DataTable.Title>
                  <DataTable.Title> </DataTable.Title>
                  <DataTable.Title> </DataTable.Title>
                  <DataTable.Title>{data.total}</DataTable.Title>
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

      {/* <View style={{ flexDirection: 'row', marginTop: 45, backgroundColor: '#F1948A ' }}> */}
      {/* <View>
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
        </View> */}
      {/* </View>
      <View style={{ height: 15 }}></View> */}

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
            Place your order
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
  // payonline: {
  //   borderWidth: 1,
  //   borderColor: '#2c3e50',
  //   backgroundColor: '#062157',
  //   marginRight: 10,
  //   marginLeft: 2,
  // },

  // paycash: {
  //   borderWidth: 1,
  //   borderColor: '#2c3e50',
  //   backgroundColor: '#062157',
  //   marginLeft: 2,
  // },

  paycas: {
    borderWidth: 1,
    borderColor: '#062157',
    backgroundColor: '#062157',
    // marginLeft: 20,
    // marginRight: ,
    alignContent: 'center',
    marginTop: 70,
    borderRadius: 5,


  },



  // pays: {
  //   borderWidth: 1,
  //   borderColor: '#3498DB',
  //   backgroundColor: '#3498DB',
  //   marginLeft: 2,
  // },
});
















