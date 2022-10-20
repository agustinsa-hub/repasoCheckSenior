import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewCar = () => {
  let initialState = { marca: "", modelo: "", year: 0, precio: 0 };
  const [newCar, setNewCar] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/users").then((res) => setUsers(res.data));
  }, []);

  const handleInputs = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setNewCar({ ...newCar, [inputName]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`api/cars/${selectedUserId}`, newCar)
      .then(() => navigate(`/users/${selectedUserId}`));
  };

  const handleSelect = (e) => {
    const selectedUser = e.target.value;
    setSelectedUserId(selectedUser);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>CREAR AUTO</h2>
      <form
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label>MARCA</label>
        <input
          type="text"
          value={newCar.marca}
          name="marca"
          onChange={handleInputs}
        />
        <br />
        <label>MODELO</label>
        <input
          type="text"
          value={newCar.modelo}
          name="modelo"
          onChange={handleInputs}
        />
        <br />
        <label>AÑO</label>
        <input
          type="text"
          value={newCar.year}
          name="year"
          onChange={handleInputs}
        />
        <br />
        <label>PRECIO</label>
        <input
          type="text"
          value={newCar.precio}
          name="precio"
          onChange={handleInputs}
        />
        <br />
        <label>USUARIO</label>
        <select onChange={handleSelect}>
          {users.map(({ name, id }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
        <button style={{ marginTop: "50px", padding: "10px" }} type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default NewCar;
