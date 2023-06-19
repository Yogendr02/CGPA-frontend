import Winner from "../components/Winner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addopt, adduserdetail, seatquantity } from "../store/index";
import { motion } from "framer-motion";
export default function Winnerpage() {
  const variantation = {
    hidden: {
      x: "-100vw",
      transition: { ease: "easeInOut", delay: 1.5, duration: 1.5 },
    },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 1, duration: 1, damping: 8 },
    },
  };
  const config = localStorage.getItem("token");
  const dispatch = useDispatch();
  const vconfig = {
    headers: {
      Authorization: `Bearer ${config}`,
    },
  };
  const getusersdetailsdata = () => {
    return axios
      .get("https://cgpa-backend.onrender.com/getuserdetail", vconfig)
      .then((res) => res.data);
  };
  const getseatsdata = () => {
    return axios
      .get("https://cgpa-backend.onrender.com/getseat", vconfig)
      .then((res) => res.data);
  };
  const getuserseatdata = () => {
    return axios
      .get("https://cgpa-backend.onrender.com/getuserseat", vconfig)
      .then((res) => res.data);
  };
  useQuery({
    queryKey: ["usersdetail"],
    queryFn: getusersdetailsdata,
    onSuccess: (data) => {
      dispatch(adduserdetail(data));
    },
  });
  useQuery({
    queryKey: ["seatdetail"],
    queryFn: getseatsdata,
    onSuccess: (data) => {
      dispatch(seatquantity(data));
    },
  });
  useQuery({
    queryKey: ["userseat"],
    queryFn: getuserseatdata,
    onSuccess: (data) => {
      dispatch(addopt(data));
    },refetchInterval:1000
  });

  const userdetail = useSelector((state) => {
    return state.resultdetail.userdetail;
  });
  let seatamount = useSelector((state) => {
    return state.resultdetail.seatamount;
  });
  const useropt = useSelector((state) => {
    return state.resultdetail.useropt;
  });
  const sorted = [...userdetail].sort((a, b) => b.cgpa - a.cgpa);
  let mylist = [];
  console.log(userdetail, "userdetail");
  console.log(seatamount, "seats");
  console.log(useropt, "useropt");

  const ben = () => {
    sorted.forEach(async (item2, indexing) => {
      const filterate = await useropt.filter((item1) => {
        return item1.reg === item2.reg;
      })[0];
      console.log(filterate, "filterate");
      const seatkeys = Object.keys(seatamount[0]);
      const seatvalues = Object.values(seatamount[0]);

      console.log(seatkeys);
      console.log(seatvalues);
      seatkeys.forEach((keyss, index) => {
        if (
          keyss === filterate.opt1 &&
          seatvalues[index] > 0 &&
          mylist.length === indexing
        ) {
          mylist.push({ [filterate.reg]: filterate.opt1 });
          seatamount = [
            { ...seatamount[0], [filterate.opt1]: seatvalues[index] - 1 },
          ];
        }
        if (
          keyss === filterate.opt2 &&
          seatvalues[index] > 0 &&
          mylist.length === indexing
        ) {
          mylist.push({ [filterate.reg]: filterate.opt2 });
          seatamount = [
            { ...seatamount[0], [filterate.opt2]: seatvalues[index] - 1 },
          ];
        }
        if (
          keyss === filterate.opt3 &&
          seatvalues[index] > 0 &&
          mylist.length === indexing
        ) {
          mylist.push({ [filterate.reg]: filterate.opt3 });
          seatamount = [
            { ...seatamount[0], [filterate.opt3]: seatvalues[index] - 1 },
          ];
        } else {
          console.log("getlost");
        }
      });
    });
  };

  ben();
  if (useropt.status === "loading") {
    return <div>wait</div>;
  }
  return (
    <motion.div variants={variantation} initial="hidden" animate="visible">
      <Winner list={mylist} />;
    </motion.div>
  );
}
