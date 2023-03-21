import { useEffect,useState } from "react";
import {getFloors} from '../api/index'

export const useFloorData = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getUsers().then(res => {
            setData(res.data)
            console.log(res.data);
        }).catch(err => console.log(err))
    }, [])

    return { data }
}