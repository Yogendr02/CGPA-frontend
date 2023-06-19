import { Card, Typography } from "@material-tailwind/react";
import axios from "axios"
import { useQuery } from "@tanstack/react-query";

const TABLE_HEAD = ["Name","Registration Number","CGPA"];

export default function Table() {
  const dis = localStorage.getItem("token") 
  console.log(dis,"table")

  const config = {
    headers:{
        "Authorization": `Bearer ${dis}`
    }
  }

  function Getabledata() {
    return  axios.get(`https://cgpa-backend.onrender.com/getuserdetail`,config).then(res=>res.data)
}
  const tableData = useQuery({
    queryKey: ["table"],
    queryFn: Getabledata
  });

  if (tableData.status === "loading") {
    return <h1>wait guys</h1>;
  }
  if (tableData.status === "error") {
    return <h1>got error</h1>;
  }
  const TABLE_ROWS1 = tableData.data
  const TABLE_ROWS = [...TABLE_ROWS1].sort((a,b)=>a.cgpa-b.cgpa)
  console.log(tableData.data);
  return (
    <Card className="overflow-scroll h-full w-[75vw] m-auto mt-24">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, cgpa, reg }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {reg}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {cgpa}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
