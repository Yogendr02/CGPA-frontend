import axios from "axios"
export default function Postdata({vurl,sendingdata,vconfig}){
    const config = {
        headers:{
            "Authorization": `Bearer ${vconfig}`
        }
      }
    return (
        axios.post(`https://cgpa-backend.onrender.com/${vurl}`,sendingdata,config).then(res=>res.data)
    )
}