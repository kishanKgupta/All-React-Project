import React from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const project_list = [
    {
      No: 1,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "https://www.google.co.in/",
    },
    {
      No: 2,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 3,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 4,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 5,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 6,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 7,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 8,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 9,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 10,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 11,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
    {
      No: 12,
      Project_Name: "Counter App",
      Desc: "Good Project",
      Link: "/counter",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col mb-4">
      <h1 className="mb-4 text-2xl">List of React Project</h1>
      <table className="border-black border">
        <thead>
          <tr className="border-black border">
            <th className="border-black border p-8">No.</th>
            <th className="border-black border p-8">Project Name</th>
            <th className="border-black border p-8">Description</th>
            <th className="border-black border p-8">Link</th>
          </tr>
        </thead>

        <tbody>
          {project_list.map((list) => (
            <tr key={list.No}>
              <td style={{ width: "10%" }} className="border-black border p-8">
                {list.No}
              </td>
              <td style={{ width: "30%" }} className="border-black border p-8">
                {list.Project_Name}
              </td>
              <td style={{ width: "40%" }} className="border-black border p-8">
                {list.Desc}
              </td>
              <td style={{ width: "20%" }} className="border-black border p-8">
                <Link to={list.Link}>Open</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
