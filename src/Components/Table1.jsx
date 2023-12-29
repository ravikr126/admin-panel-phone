import React, { useEffect, useState } from "react";
import axios from "axios";

const Table1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch(er => console.log(er))
  },[]);
  return (
    <>
      <div>
        <div>
          <input type="text" placeholder="company name" className="p-5 m-5 border-black border" />
          <input type="text" placeholder="Home"className="p-5 m-5 border-black border" />
          <input type="text" placeholder="About" className="p-5 m-5 border-black border"/>
          <input type="text" placeholder="contact" className="p-5 m-5 border-black border"/>
          <button className="bg-blue-500 border border-black py-5 px-8 m-5 rounded-full ">Add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th className="p-5 w-8">Id</th>
              <th>company name</th>
              <th>Home</th>
              <th>About</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.company}</td>
                <td>{user.home}</td>
                <td>{user.about}</td>
                <td>{user.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table1;
