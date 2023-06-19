import axios from "axios"
export default function Signin({url,sendingdata}){
    return (
        axios.post(`https://cgpa-backend.onrender.com/${url}`,sendingdata).then(res=>res.data)
    )
}