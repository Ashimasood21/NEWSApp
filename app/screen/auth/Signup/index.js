import React ,{useState}from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Utility from "../../../Utility"
import * as Service from "../../../Api/Service"
import * as Url from "../../../Api/Url"
const Signup = ({navigation}) => {
    const[email,setEmail]=useState('lee@gmail.com')
        const[password,setPassword]=useState('123456789')
    const login = async() => {
        if(email==''||password==''){
            return Alert.alert("Please fill all fields")
        }
        else if(await Utility.isValidEmail(email)){
            return Alert.alert("Please fill valid email")
        }
        else{
let body ={
    email:"lee@gmail.com",
    password:'123456789'
}
        let res=await Service.post(Url.LOGIN,"",body)
        console.log(res)
await Utility.setInLocalStorge('token',res.data.token)
navigation.navigate('Home')

        }
    }
    return (
        <View style={{ backgroundColor: '#ffe0cc', height: '100%', width: '100%' }}>
           
          

            <TextInput placeholder="Your Email"
            onChangeText={(text)=>setEmail(text)}
            style={{fontSize:25,borderWidth:1,backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:100,borderRadius:8}}></TextInput>
            <TextInput placeholder="Password"
            onChangeText={(text)=>setPassword(text)}

            style={{fontSize:25,borderWidth:1,backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:20,borderRadius:8}}></TextInput>
            <TouchableOpacity onPress={() => login()}>
            <Text style={{fontSize:25,backgroundColor:'#e65c00',width:100,alignSelf:'center',marginTop:10,padding:10,borderRadius:8}}>Submit</Text>
            </TouchableOpacity>
        </View>

    )
}
export default Signup;