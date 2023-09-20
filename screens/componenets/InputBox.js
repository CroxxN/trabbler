import React from "react"
import {TextInput,View,StyleSheet} from "react-native"


export default function Input({text,setValue,placeholder,secureTextEntry}){
    return(
        
        <View style={styles.container}>

        <TextInput 
        value={text}
        onChangeText={setValue}
        placeholder={placeholder} 
        style={styles.input}
        secureTextEntry={secureTextEntry}
        />
        
        </View>

    )
}
const styles= StyleSheet.create(
    {   input:{
        
    },
      container:{
        padding:20,
        backgroundColor:"white",
        width:'100%',
        borderRadius:6,
        borderWidth:1,
        borderColor:'#e8e8e8',
        paddingHorizontal:10,
        marginVertical:5
       
    },
        
    }
 );
