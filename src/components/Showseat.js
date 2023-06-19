import {
  List,
  ListItem,
  ListItemSuffix,
  Chip,
  Card,
} from "@material-tailwind/react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Showseat() {
    const config = {
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
  const getseatnumber = () => {
    return axios
      .get("https://cgpa-backend.onrender.com/getseat",config)
      .then((res) => res.data);
  };
  const seatlist = useQuery({
    queryKey: ["seatslist"],
    queryFn: getseatnumber,
    refetchInterval:2000
  });
  if (seatlist.status === "loading") {
    return <div>loading</div>;
  }
  if (seatlist.status === "error") {
    <div>good job</div>;
  }
  return (
    <Card className="m-auto w-96">
      <List>
        <ListItem>
          CSE
          <ListItemSuffix>
            <Chip
              value={seatlist.data[0].CSE}
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          ECE
          <ListItemSuffix>
            <Chip
              value={seatlist.data[0].ECE}
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          EEE
          <ListItemSuffix>
            <Chip
              value={seatlist.data[0].EEE}
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          Chemical Engineering
          <ListItemSuffix>
            <Chip
              value={seatlist.data[0].Chemical}
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          Mechanical Engineering
          <ListItemSuffix>
            <Chip
              value={seatlist.data[0].Mechanical}
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          Civil Engineering
          <ListItemSuffix>
            <Chip
              value={seatlist.data[0].Civil}
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          Biotechnolgy
          <ListItemSuffix>
            <Chip
              value={seatlist.data[0].Biotechnology}
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
      </List>
    </Card>
  );
}
