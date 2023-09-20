import { Text,View,Button,StyleSheet,Image,useWindowDimensions,Input} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonCus from './componenets/button'
import mapImg from "../assets/maps.png"
import { useState } from "react";
import {useNavigation} from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker';



export default function Home({navigation}){
  const[pickUp,setPickUp]= useState("")
  const[dropUp,setdropUp]= useState("")
  const{height}= useWindowDimensions();



  const findRider= ()=>{
    console.warn("rider found")
  }
    return(
  <View>
    <Image 
            source={mapImg}
            style={[styles.logo,{height: height * 0.5}]}
             />

    <Text style={{padding:10}}> Pickup Location</Text>

     <Picker 
               style={{padding:10,backgroundColor:'white',marginBottom:10}}
               selectedValue={pickUp}
               onValueChange={value => setPickUp(value)}>
              <Picker.Item label="Nepal Neighbourhood" value="Nepal Neighbourhood" />
              <Picker.Item label="Berlin St" value="Berlin St" />
              <Picker.Item label="Holy Field" value="Holy Field" />
              <Picker.Item label="Switzerland St" value="Switzerland St" />
              <Picker.Item label="S Africa St" value="S Africa St" />
              <Picker.Item label="Mexico Street" value="Mexico Street" />
              <Picker.Item label="Pilipinas" value="Pilipinas" />
    </Picker>   
    <Text style={{padding:10}}> Destination</Text>

    <Picker 
               style={{padding:10,backgroundColor:'white',marginBottom:10}}
               selectedValue={dropUp}
               onValueChange={value => setdropUp(value)}>
              <Picker.Item label="Station 1" value="Station 1" />
              <Picker.Item label="Station 2" value="Station 2" />
              <Picker.Item label="Station 3" value="Station 3" />
    </Picker>   
    
             <ButtonCus title="Find a Rider" onPress={findRider} theme="primary"/>
    <ButtonCus
        theme="secondary"
        title="Go to Login page"
        onPress={() => navigation.navigate('login')}
    />
   </View>

    )

};
const styles= StyleSheet.create(
  {   container:{
      alignItems:'center',
      padding:20


  },
      logo:{
          width:'100%',
          height:100,
          maxHeight:300,
          marginBottom:20
      },
  }
);
