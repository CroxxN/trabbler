import { View, Text, LogBox } from "react-native";
import { ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import TripsBox from "./componenets/TripsBox";

const db_url = "http://localhost:5000/api";

function FindTrips(navigation) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(<ActivityIndicator size={"large"} />);
  const [error, setError] = useState(null);
  const getTrips = async () => {
    try {
      // const response = await fetch(`${db_url}/trips`);
      // const data = await response.json();
      const data = [
        {
          from: "Tel Aviv",
          to: "Jerusalem",
          time: "12:00",
        },
        {
          from: "Gongabu",
          to: "Maharajgunj",
          time: "9:00",
        },
      ];
      setTrips(data);
      console.log(data);
      setLoading(null);
      // If the error by set by prevous call, reset it
      setError(null);
    } catch (err) {
      setError(err);
      setLoading(null);
    }
  };
  useEffect(() => {
    getTrips();
  }, []);

  return (
    <View>
      {loading}
      {trips.map((trip) => (
        <TripsBox props={trip} />
      ))}
      {error && <Text>{error}</Text>}

      {/* {error && <Text>{error}</Text>} */}
      {/* <ActivityIndicator size={"large"} /> */}
    </View>
  );
}

export default FindTrips;
