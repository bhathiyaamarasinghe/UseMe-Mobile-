
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
import { DataTable, IconButton, Colors } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-share';
import { AuthContext } from '../components/context';


const Orderstable = props => {
  const [loadData, setloadData] = useState(false);
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
        console.log('123',res.data[0].customer.id);
        
     
      })
      cart(getdata)
    }

    getdata()
  }, [loadData]
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
      url: `http://192.168.8.112:8000/api/delatecartproduct/`,
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

  const getDatatoTable = async() =>{
    setloadData(true);
    //  AsyncStorage.setItem('cartID',id)
     
  } 

 

  return (
    <ScrollView style={styles.container}>
        <View style={{ marginTop: 10, marginBottom: 20, marginLeft: 30 }}>

      
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}> 
                Shopping Cart
                
                </Text>
                <TouchableOpacity

                onPress={() => getDatatoTable()}

                style={styles.get}>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 2,
                    marginBottom: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    textAlign: 'center',
                    fontSize:18,
                  
                    
                  }}>
                 Get Cart
                </Text>
                </TouchableOpacity>

               
              </View>
               
              <DataTable>
                <DataTable.Header style={{backgroundColor:'white', borderWidth: 2,borderColor:'black',borderRadius:5}}>
                  <DataTable.Title>Item No</DataTable.Title>
                  {/* <DataTable.Title>Item</DataTable.Title> */}
                  <DataTable.Title>Price</DataTable.Title>
                  <DataTable.Title>Qty</DataTable.Title>
                  <DataTable.Title>Subtotal</DataTable.Title>
                  <DataTable.Title></DataTable.Title>
                  <DataTable.Title>Action</DataTable.Title>
                  <DataTable.Title></DataTable.Title>

                </DataTable.Header>           

      {
        Data ?.map((tdata,i) => {
          return (
            <View>
      
                <DataTable.Row key={i} style={{backgroundColor:'#FFC300', borderWidth: 1,borderColor:'black',borderRadius:5}}> 

                  <DataTable.Cell>{i + 1}   </DataTable.Cell>
                   <DataTable.Cell>{tdata.price}   </DataTable.Cell> 
                   <DataTable.Cell>{tdata.quantity}</DataTable.Cell>
                  <DataTable.Cell>{tdata.subtotal}</DataTable.Cell> 
                  <DataTable.Cell>
                     <Text onPress={() => editcartproduct(tdata.id)} >Sub</Text> 
                     
               
                  
               
                  </DataTable.Cell>
                  <DataTable.Cell>
                    
                     
                     <Text style={{color:'red'}} onPress={() => delatecartproduct(tdata.id)} >Delete</Text>
                  
                  
               
                  </DataTable.Cell>
                  <DataTable.Cell>
                 
                    <Text onPress={() => updatecartproduct(tdata.id)} >Add</Text>
                  
               
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
      
               
                <DataTable.Header style={{backgroundColor:'white',borderRadius:5}}>
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

 

      <View>
                <TouchableOpacity

          onPress={() => delatefullcard()}

          style={styles.delete}>
          <Text
            style={{
              color: '#fff',
              marginTop: 2,
              marginBottom: 5,
              marginLeft: 5,
              marginRight: 5,
              textAlign: 'center',
              fontSize:18,
            
              
            }}>
            Delete Cart
          </Text>
          </TouchableOpacity>
        <TouchableOpacity

          onPress={() => props.navigation.navigate('Billscreen')}
          
          style={styles.paycas}>
          <Text
            style={{
              color: '#fff',
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 5,
              marginRight: 5,
              textAlign: 'center',
              fontSize:18,
             
              
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
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'white' },
  head: { height: 40, backgroundColor: '#85C1E9' },
  text: { margin: 8 },


  paycas: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    alignContent: 'center',
    marginTop: 70,
    borderRadius: 5,
    height: 40 


  },
  delete: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
    alignContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    height: 30, 
    width:180


  },
  get: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    left:200,
    borderRadius: 5,
    height: 30, 
    width:100


  },


});
















