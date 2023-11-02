import React, { useState } from "react";
import { ImageBackground, View, TextInput, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";


function Login({ navigation }) {
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")

  return (
    <ImageBackground
      source={require('../assets/backColor.png')}
      style={styles.container} >

      

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});
// 1. 클레스이름 마주기
// 2. 토요일까지 달력
// 3. 

export default Login;