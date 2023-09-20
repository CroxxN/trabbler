import { View, Text, StyleSheet, Image } from "react-native";

function TripsBox({ props }) {
  const { from, to, time } = props;
  const fromToText = from + " => " + to;
  {
    console.log(fromToText);
  }
  return (
    <View style={Styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          // width: 50,
          // height: 50,
        }}
      >
        {/* Replace it with profile avatar */}
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={require("../../assets/avatar.png")}
        />
      </View>
      <View style={Styles.sBox}>
        <Text style={Styles.text}>{fromToText}</Text>
        <Text style={Styles.text}>{time}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    // height: 100,
    // width: "100%",
    margin: 5,
    borderRadius: 10,
    // flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    // alignItems: "center",
    // padding: 20,
  },
  sBox: {
    flex: 2,
    padding: 10,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TripsBox;
