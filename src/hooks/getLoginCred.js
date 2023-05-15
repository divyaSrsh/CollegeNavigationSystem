import { useEffect,useState } from "react";
import {getLogin} from '../api/index'

export const useLoginCred = (props) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getLogin({ username : props.username,password : props.password}).then(res => {
            if(res)
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    return { data }
}