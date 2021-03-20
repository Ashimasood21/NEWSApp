import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
    const Mobile = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={{ backgroundColor: '#ffe0cc', height: '100%', width: '100%' }}>
            <TouchableOpacity>
                <View style={{
                    marginTop: '10%', justifyContent: 'center', alignItems: 'center', borderWidth: 2,
                    backgroundColor: '#e65c00', borderRadius: 10, marginLeft: '10%', marginRight: '10%', padding: 6
                }}>
                    <Text style={{ fontSize: 20 }}>Login with Facebook</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Mobile()}>
                <View style={{
                    marginTop: '10%', justifyContent: 'center', alignItems: 'center', borderWidth: 2,
                    backgroundColor: '#e65c00', borderRadius: 10, marginLeft: '10%', marginRight: '10%', padding: 6
                }}>
                    <Text style={{ fontSize: 20 }}>Login with Mobile</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Login;