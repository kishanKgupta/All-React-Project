import React from 'react';
import "./Table.css";
import { Link } from 'react-router-dom';

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
    }
  ];


  return (
    <div className="table-box">
      <h1>List Of React Project</h1>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>

        <tbody>
          {project_list.map((list) => (
            <tr key={list.No}>
              <td style={{ width: "10%" }}>{list.No}</td>
              <td style={{ width: "30%" }}>{list.Project_Name}</td>
              <td style={{ width: "40%" }}>{list.Desc}</td>
              <td style={{ width: "20%" }}>
                <Link to={list.Link}>Open</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table