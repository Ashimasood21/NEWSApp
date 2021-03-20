import React from 'react';
import { useEffect } from 'react';
import { Image, View } from 'react-native';
import Login from '../Login';
const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(function () {
            navigation.navigate('Login')
        }, 2000);
    })
    return (
        <View>
            <Image source={require('../../../../assets/splash.png.jpg')} style={{ height: '100%', width: '100%' }}></Image>
        </View>
    )
}
export default Splash;