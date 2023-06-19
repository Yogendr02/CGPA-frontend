import axios from "axios"
export default function Patchdata({vurl,sendingdata,vconfig}){
    const config = {
        headers:{
            Authorization: `Bearer ${vconfig}`
        }
      }
    return (
        axios.patch(`https://cgpa-backend.onrender.com/${vurl}`,sendingdata,config).then(res=>res.data)
    )
}