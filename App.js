import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import registerPassenger from "./screens/registerPassenger";
import registerDriver from "./screens/registerDriver";
import FindTrips from "./screens/FindTrips";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Trabbler: Ride To Nearest Station" }}
        />
        <Stack.Screen name="login" component={Login} options={{ title: "" }} />
        <Stack.Screen
          name="registerPassenger"
          component={registerPassenger}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="findtrips"
          component={FindTrips}
          options={{ title: "Find Trips" }}
        />
        <Stack.Screen
          name="registerDriver"
          component={registerDriver}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontSize: 20,
  },
});
