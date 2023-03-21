
import React from "react";
import { useGeolocated } from "react-geolocated";
export const UserLocation = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const { coords } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 5000,
        });
        setData(coords);
    }, [])
    console.log(data);
    return { data }
}

export default UserLocation;
