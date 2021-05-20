import React,{useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Button
}from 'react-native';
const BookmarkScreen = () => {

  const [enteredCmnt,setEnteredCmnt] = useState('');
        const [courseCmnts,setCourseCmnts] = useState([]);
        const CmntInputHandler=(enteredText)=>{
            setEnteredCmnt(enteredText);
        };
        const addCmntHandler = () =>{
            setCourseCmnts(currentCmnts=>[...currentCmnts,enteredCmnt]);
        };

    return (
      <View style={styles.container}>
                
                 <View style={styles.Header}>
                     <Text style={styles.headerText}>Comment Box</Text>
                 </View>

                 <ScrollView style={styles.scrollcontainer}>
                     
                        {courseCmnts.map((cmnt)=><View style={styles.listItem}><TouchableOpacity><Text key={cmnt}>{cmnt}</Text></TouchableOpacity></View>)}
                     
                 </ScrollView>

             <View style={styles.footer}>
                     <TextInput 
                     style={styles.textInput}
                     placeholder='Comment Here..'
                     placeholderTextColor='gray'
                     underlineColorAndroid='transparent'
                     onChangeText={CmntInputHandler}
                     value={enteredCmnt}
                     />
                 </View>

                 <TouchableOpacity  style={styles.addButton} onPress={addCmntHandler}>
                     <Text style={styles.addButtonText}>      Add Commnet</Text>
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
    backgroundColor:'#FABC40',
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
    color:'white',
    fontSize:15,
    
},
listItem:{
    padding:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1,
    margin:10
}
});
