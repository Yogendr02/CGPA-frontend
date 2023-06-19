import {tokenreducer,addtoken} from "./token"
import {conreducer,addpass,addreg} from "./validateadmin"
import {resultreducer,addopt,adduserdetail,seatquantity} from "./resultdata"
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer:{
        tokendetail: tokenreducer,
        confirm : conreducer,
        resultdetail : resultreducer
    },
});

export {addtoken,store,addreg,addpass,addopt,adduserdetail,seatquantity}