import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      <div class="btn-group d-flex flex-wrap" role="group" aria-label="Basic mixed styles example">
        <Link type="button" class="btn btn-outline-secondary" to={`/edit/${props.record._id}`}>Edit</Link>
        <button type="button" class="btn btn-outline-danger" onClick={() => { props.deleteRecord(props.record._id); }}>Delete</button>
      </div>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://mern-stack-crud-server.onrender.com/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
      setIsLoaded(true);
    }
    getRecords();
    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`https://mern-stack-crud-server.onrender.com/${id}`, {
      method: "DELETE"
    });
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  if (!isLoaded) {
    return <div className="d-flex justify-content-center" style={{ marginTop: 100 }}>Loading...</div>;
  } else {

  // This following section will display the table with the records of individuals.
  return (
    <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }} >

      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
}