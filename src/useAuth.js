import  { useEffect,useState } from "react";
import axios from "axios";
export default function useAuth(code){
    const [accessToken,setAccessToken]=useState();
    const [refreshToken,setRefreshToken]=useState();
    const [expiresIn,setExpiresIn]=useState();

    useEffect(()=>{
        axios.post("http://localhost:5000/login",{
            code,
        }).then((res)=>{
            window.history.pushState({},null,"/search");//to remove code from url
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            
        }).catch((err)=>{
            console.log(err);
            window.location="/";
        });
    },[code]);//run everytim code changes
    //token expires every hour so we have to write simple code to refresh token instead of user logging in every hour
    
    
    useEffect(()=>{
        if(!refreshToken || !expiresIn) return;
        const interval=setInterval(()=>{
        axios.post("http://localhost:5000/refresh",{
            refreshToken,
        }).then((res)=>{
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
        }).catch(()=>{
            console.log("error 1");
            window.location="/"
        });
    },(expiresIn - 60) * 1000 );// refresh one min before it expires   /* convert to milliseconds*/
    return ()=>clearInterval(interval);
    },[refreshToken,expiresIn]);//whenever refreshtoken or expires in values change
    return accessToken;

}