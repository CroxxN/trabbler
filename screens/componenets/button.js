import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Buttono(props) {
  const { onPress, title,theme} = props;
  return (
    <Pressable style={[styles.button,styles[`${theme}`]]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    marginTop: 20,
    width:'100%'
  },
  primary: {
    backgroundColor:'#2dd1e3'
  },
  secondary:{
    backgroundColor:'gray',
  },
  text :{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});