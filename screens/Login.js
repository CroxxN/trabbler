import {
  Image,
  Button,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from "../assets/logot.png";
import Input from "./componenets/InputBox";
import { useState } from "react";
import ButtonCus from "./componenets/button";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const login = () => {
    // if email or pass if empty, alert and return
    if (!email || !password) {
      return alert("Please fill all the fields");
    }
    // For testing purpose, we are using local server
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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
  };
  const regDriver = () => {
    navigation.navigate("registerDriver");
  };
  const registerPassenger = () => {
    navigation.navigate("registerPassenger");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} />
      <Input placeholder="Email" value={email} setValue={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <ButtonCus title="Login" onPress={login} theme="primary" />
      <ButtonCus
        title="Register Passenger"
        onPress={registerPassenger}
        theme="secondary"
      />
      <ButtonCus
        title="Register Driver"
        onPress={regDriver}
        theme="secondary"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    height: 100,
    maxHeight: 200,
  },
});

export default Login;
