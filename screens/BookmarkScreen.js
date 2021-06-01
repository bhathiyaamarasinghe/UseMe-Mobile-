
import React,{useState} from 'react';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Button
}from 'react-native';
import {BaseUrl} from '../components/serviceUrls';
import { header2 } from '../env'

const BookmarkScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        body: ''
    });

    const AddComment = async () => {
        if (!data.email.trim() || !data.body.trim() ) {

            alert('Please fill all the feilds and Try again...');
            return;
        }
        else{
            console.log("handle comment");
            await axios({
                method: "post",
                url: BaseUrl+`/api/comment/`,
                headers: header2,
                data: {
                    "email": data.email,
                    "body": data.body
                }
            }).then(response => {
                console.log(response.data);
            
            }).catch(function (error) {
                //console.log(error.response);
            });
            alert('Your comment is successfuly added....Thank you for your comment...');
        }

    }

    const handleEmail = (val) => {
        setData({
            ...data,
            email: val,
        });
    }   

    const handleBody = (val) => {
        setData({
            ...data,
            body: val,
        });
    }



    return (
      <View style={styles.container}>
                
                 <View style={styles.Header}>
                     <Text style={styles.headerText}>Comment Box</Text>
                 </View>

                 <Text style={styles.text_email}>Email</Text>

                 <TextInput
                            placeholder="Your email"
                            style ={styles.textInput}
                            placeholderTextColor="#666666"
                            autoCapitalize="none"
                            value={data.email}
                            onChangeText={(val) => handleEmail(val)}
                />

                <Text style={styles.text_comment}>Comment</Text>

                <TextInput
                            placeholder="Your comment"
                            style ={styles.textcomment}
                            placeholderTextColor="#666666"
                            autoCapitalize="none"
                            value={data.body}
                            onChangeText={(val) => handleBody(val)}
                />

                <TouchableOpacity
                            onPress={() => AddComment()}
                            style={styles.addcomment}
                >
                            <Text style={[styles.textaddcomment, {
                                color: 'black'
                            }]}>Add Comment</Text>
                </TouchableOpacity>

                

     </View>

    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container:{
    flex : 1,
    
},
Header:{
    backgroundColor:'#FFC300',
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth:5,
    borderBottomColor:'black',
},
headerText:{
    color:'black',
    fontSize:18,
    padding:10,
},
scrollcontainer:{
    flex : 1,
    marginBottom:100,
    
},
footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    zIndex:10,
},
textInput:{
    alignSelf:'stretch',
    color:'black',
    padding:20,
    backgroundColor:'white',
    borderTopWidth:2,
    borderTopColor:'black'
},
addButton: {
    position:'absolute',
    zIndex:11,
    right:20,
    bottom:90,
    backgroundColor:'black',
    width:70,
    height:70,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
},
addButtonText:{
    color:'black',
    fontSize:15,
    
},
listItem:{
    padding:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1,
    margin:10
},
text_email: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 10,
    marginLeft:10,
    fontWeight: 'bold'
},
textInput: {
    paddingLeft: 10,
    color: '#05375a',
    borderColor:'black',
    borderWidth:1,
    marginLeft:10,
    marginRight:10
},
text_comment: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 30,
    marginLeft:10,
    fontWeight: 'bold'
},
textcomment: {
    paddingLeft: 10,
    color: '#05375a',
    borderColor:'black',
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
    height:240
    
},
addcomment: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft:10,
    borderColor: '#051A85',
    borderWidth: 1,
    marginTop: 30,
    backgroundColor: '#FFC300',
},
textaddcomment: {
    fontSize: 18,
    fontWeight: 'bold'
},
});
