import React from "react";
import { Link } from "react-router-dom";

export default ({ cars }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "1%" }}>CARS</h2>
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
          </tr>
        </thead>
        <tbody>
          {cars?.map(({ marca, modelo, year, precio }) => {
            return (
              <tr>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>{marca}</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>{modelo}</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>{year}</h4>
                </td>
                <td>
                  <h4 style={{ paddingRight: "40px" }}>{precio}</h4>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
