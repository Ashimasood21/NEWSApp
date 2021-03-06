import React from 'react';
import {View, TextInput,StyleSheet} from 'react-native';

const SearchBar =()=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder='Search here..'></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: `#e6e6fa`,
        borderRadius: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    searchInput:{
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }

})

export default SearchBar;