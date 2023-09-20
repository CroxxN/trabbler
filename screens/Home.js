import { Text,View,Button} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home({navigation}){
    return(
  <View>
    <Button
        title="Go to Login page"
        onPress={() => navigation.navigate('login')}
    />
   </View>

    )

};