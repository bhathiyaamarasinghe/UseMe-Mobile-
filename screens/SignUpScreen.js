
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Select Who You Are...</Text>
        </View>
        <View style={styles.footer}>
            
            <TouchableOpacity
                    onPress={() => navigation.navigate('CustomerRegistrationScreen')}
                    style={[styles.signIn, {
                        borderColor: '#e74c3c',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#e74c3c'
                    }]}>Customer Account</Text>
            </TouchableOpacity>
                <View >
                
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ShopRegistrationScreen')}
                        style={[styles.signIn, {
                            borderColor: '#e74c3c',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#e74c3c'
                        }]}>Business Account</Text>
                    </TouchableOpacity>
                </View>
                <View>
                   
                   <TouchableOpacity
                       onPress={() => navigation.navigate('DeliveryPersonregistrationScreen')}
                       style={[styles.signIn, {
                           borderColor: '#e74c3c',
                           borderWidth: 1,
                           marginTop: 15
                       }]}
                   >
                       <Text style={[styles.textSign, {
                           color: '#e74c3c'
                       }]}>Delivery Person Account</Text>
                   </TouchableOpacity>
               </View>
               <View style={styles.logocontainer}>
               <Image
                    source={require('../assets/man.jpg')}
                    style={styles.logo}
                />
               </View>
        </View>
        
    </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#2c3e50'
    },
    logocontainer: {
       paddingTop:15
      },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 5
    },
    footer: {
        flex: 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom:20
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        
    },
    logo: {
        width: 320,
        height: 320
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
