import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Title from './Title';
import SmallCard from './SmallCard';
import FlatCard from './FlatCard';

const VerticalList = ({ title, data }) => {
  return(
    <View>
         <Title>{title}</Title>
         <View style={styles.container}>
         {data.map(item => <FlatCard item={item} key={item.id}/>)}
         </View >
         
    </View>

  )
}
const styles=StyleSheet.create({
    container:{
        marginVertical: 15,
    }
})

export default VerticalList;