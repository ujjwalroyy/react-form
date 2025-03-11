import React, { useState, useEffect } from "react";

const Display = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {    
    const storedData = localStorage.getItem("data");
    console.log("Rendered user");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);



  return (
    <>
    <table className="table-container">
      <tr>
        <th>Profile Pic</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Stream</th>
        <th>Subjects</th>
      </tr>
      {userData.length > 0 ? (
        userData.map((user, index) => (
          // <div key={index} className="card-component">
          //   {user.file ? <img src={user.file} alt="Profile Pic" /> : <p>No Profile Pic</p>}
          //   <p>Username: {user.username}</p>
          //   <p>Email: {user.email}</p>
          //   <p>Gender: {user.gender}</p>
          //   <p>Age: {user.age}</p>
          //   <p>Stream: {user.stream}</p>
          //   <p>Subjects: {user.subject ? user.subject : "None"}</p>
          // </div>
          <tr>
            <td>{user.file ? <img src={user.file} alt="Profile Pic" /> : <p>No Profile Pic</p>}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
            <td>{user.stream}</td>
            <td>{user.subject ? user.subject : "None"}</td>
          </tr>
        ))
      ) : (
        <h1>No data available</h1>
      )}
      
    </table>
    {/* <button onClick={checkFunc}>Check</button> */}
    </>
  );
};

export default Display;



