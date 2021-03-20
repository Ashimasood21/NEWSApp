import React from 'react';
import {StyleSheet,StatusBar, ScrollView} from 'react-native';

const Screen =({children})=>{
    return(
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}

const styles =StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: `#f3f7f7`,
        flex: 1,

    }
})

export default Screen;