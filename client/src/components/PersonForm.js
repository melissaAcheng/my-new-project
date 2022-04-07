import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Message from the backend: {message}</h2>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>First Name</label>
          <br />
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </p>
        <p>
          <label>Last Name</label>
          <br />
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default PersonForm;
