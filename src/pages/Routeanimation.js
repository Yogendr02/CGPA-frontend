import Firstpage from "./Firstpage";
import Loginpage from "./Loginpage";
import Signinpage from "./Signinpage";
import Tablepage from "./Tablepage";
import Winnerpage from "./Winnerpage";
import Userdetailpage from "./Userdetailpage";
import Seatselection from "./Seatselection";
import Seatamount from "./Seatamount";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";


export default function RoutesWithAnimation() {
    const location = useLocation();
  
    return (
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Firstpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signinpage />} />
        <Route path="/result" element={<Winnerpage />} />
        <Route path="/seatnumber" element={<Seatamount />} />
        <Route path="/detail" element={<Userdetailpage />} />
        <Route path="/optseat" element={<Seatselection />} />
        <Route path="/table" element={<Tablepage />} />
      </Routes>
    );
  }