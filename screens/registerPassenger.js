import {
  Image,
  Button,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneInput from "react-native-phone-number-input";
import Input from "./componenets/InputBox";
import { useState } from "react";
import ButtonCus from "./componenets/button";

function registerPassenger(navigation) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [phone, setPhone] = useState("");

  const { height } = useWindowDimensions();

  const registered = () => {
    fetch("http://172.16.5.4:5000/api/registeruser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: username,
        password,
        fullname,
        phone,
      }),
    })
      // Convert the response to json
      .then((res) => res.json())
      .then((data) => {
        // If error is return, report the error to user
        if (data.error) {
          alert("Error:" + data.error);
        } else {
          // If no error, navigate to home screen
          navigation.navigate("home");
        }
      })
      .catch((err) => {
        alert("Something went wrong: " + err);
      });

    console.warn("Resgitered");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.logo, { height: height * 0.3 }]}>
        {" "}
        PASSENGER REGISTRATION
      </Text>

      <Input placeholder="Full Name" value={fullname} setValue={setfullname} />
      <Input placeholder="Username" value={username} setValue={setUsername} />
      <PhoneInput
        style={styles.phone}
        defaultValue={phone}
        defaultCode="NP"
        layout="first"
        onChangeText={(text) => {
          setPhone(text);
        }}
        withShadow
        autoFocus
      />
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <ButtonCus title="Register" onPress={registered} theme="primary" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  logo: {
    width: "100%",
    height: 50,
    maxHeight: 130,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  phone: {
    width: "100%",
  },
});

export default registerPassenger;
