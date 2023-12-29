import React, { useEffect, useState } from "react";
import axios from "axios";

const Table1 = () => {
  const [data, setData] = useState([]);
  const [home, setHome] = useState("");
  const [About, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = data[data.length - 1].id + 1;
    axios
      .post("http://localhost:3000/users", {
        id: id,
        home: home,
        About: About,
        contact: contact,
        company: company,
      })
      .then((res) => console.log(res))
      .catch((er) => console.log(er));
  };
  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="company "
              className="p-5 m-5 border-black border"
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="text"
              placeholder="Home"
              className="p-5 m-5 border-black border"
              onChange={(e) => setHome(e.target.value)}
            />
            <input
              type="text"
              placeholder="About"
              className="p-5 m-5 border-black border"
              onChange={(e) => setAbout(e.target.value)}
            />
            <input
              type="text"
              placeholder="contact"
              className="p-5 m-5 border-black border"
              onChange={(e) => setContact(e.target.value)}
            />
            <button className="bg-blue-500 border border-black py-5 px-8 m-5 rounded-full ">
              Add
            </button>
          </form>
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
