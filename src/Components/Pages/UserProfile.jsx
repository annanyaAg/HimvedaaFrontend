import { useEffect, useState } from "react";
import axios from 'axios'
const UserProfile = ()=>{

    const [data,setData] = useState([])

    const GetUserProfile = async()=>{

        const result = await axios.get("http://localhost:7676/profile", { withCredentials: true })
        setData(result);
        console.log(result)

    }

    useEffect(()=>{

        GetUserProfile();

    },[])
    return(
        <>
        user profile
        </>
    )
}

export default UserProfile;