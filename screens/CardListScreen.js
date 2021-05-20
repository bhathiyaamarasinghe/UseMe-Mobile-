import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import {data} from '../model/data';
import Card from '../components/Card';

const KEYS_TO_FILTERS = ['title'];


const CardListScreen = ({navigation}) => {

    const filteredDate = data.filter(createFilter('Fifth', KEYS_TO_FILTERS))


    const renderItem = ({item}) => {
        return (
            <Card 
                itemData={item}
                onPress={()=> navigation.navigate('CardItemDetails', {itemData: item})}
            />
        );
    };

    return (
      <View style={styles.container}>
        <FlatList 
            data={filteredDate}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});
