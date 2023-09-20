import { View } from "react-native";

const db_url = 'http://localhost:5000/api';

function FindTrips() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');


    const getTrips = async () => {
        try {
            const response = await fetch(`${db_url}/trips`);
            const data = await response.json();
            setTrips(data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    return(
        <View>
            <Text>Available Trips</Text>
            {trips.map(trip => {
                <div>
                    <Text>{trip.from}</Text>
                    <Text>{trip.to}</Text>
                    <Text>{trip.time}</Text>
               </div>
            })}

        </View>
    );
}
