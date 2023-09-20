import { Image,Button,View,Text,StyleSheet, useWindowDimensions} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from '../assets/logot.png'
import Input from "./componenets/InputBox";
import { useState } from "react";
import ButtonCus from "./componenets/button"
import {useNavigation} from '@react-navigation/native'



function login(){

    const navigation= useNavigation();

    const[username,setUsername]= useState('');
    const[password,setPassword]= useState('');
    const{height}= useWindowDimensions();
    const login = () => {
        console.warn("Logged In")
      }
    const regDriver = () => {
        navigation.navigate('registerDriver')
    }
    const registerPassenger = ()=> {
     navigation.navigate('registerPassenger')}
      
 return(

    <View style={styles.container}>
            <Image 
            source={logo}
            style={[styles.logo,{height: height * 0.3}]}
             />
             <Input placeholder="Username" value={username} setValue={setUsername}  />
             <Input placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
             <ButtonCus title="Login" onPress={login} theme="primary"/>
             <ButtonCus title="Register Passenger" onPress={registerPassenger} theme="secondary"/>
             <ButtonCus title="Register Driver" onPress={regDriver} theme="secondary"/>
    </View>

 )

}
const styles= StyleSheet.create(
    {   container:{
        alignItems:'center',
        padding:20


    },
        logo:{
            width:'70%',
            height:100,
            maxHeight:200,
        },
    }
 );

export default login;
