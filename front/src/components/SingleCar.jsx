import React, { useEffect, useState } from "react";
import axios from "axios";
import Cars from "../commons/Cars";

const SingleCar = () => {
  const [car, setCar] = useState([]);
  const [input, setInput] = useState([]);

  const handleInput = (e) => {
    const input = e.target.value;
    setInput(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`api/cars/${input}`).then((res) => setCar(res.data));
  };

  const renderCar = () => {
    if (car.id) {
      return (
        <>
          <table
            style={{
              marginTop: "10%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <thead>
              <tr>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>MARCA</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>MODELO</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>AÑO</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>PRECIO</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>DUEÑO</h4>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>{car.marca}</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>{car.modelo}</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>{car.year}</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>{car.precio}</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>
                    {car.user.name + " " + car.user.lastname}
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      );
    }
  };

  return (
    <>
      <form
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">BUSCAR AUTO</button>
      </form>
      {renderCar()}
    </>
  );
};

export default SingleCar;
