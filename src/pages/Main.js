import Routeanimation from "./Routeanimation"
import Locationprovider from "./Loactionprovider"
import Navbar from "../components/Navbar";
import { BrowserRouter} from "react-router-dom";
export default function Main() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Locationprovider>
            <Routeanimation/>
          </Locationprovider>
      </BrowserRouter>
    </>
  );
}
