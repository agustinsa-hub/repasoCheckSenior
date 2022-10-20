import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cars from "../commons/Cars";

export default () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${id}`).then((res) => setUser(res.data));
  }, []);

  useEffect(() => {
    axios.get(`/api/cars`).then((res) => {
      let arr = res.data;
      setCars(arr);
    });
  }, []);

  return (
    <div>
      <Link to="/">
        <h4>Volver a users</h4>
      </Link>
      <h2>
        {user.name} {user.lastname}
      </h2>
      <h4>DNI {user.dni}</h4>
      <br />
      <Cars cars={cars.filter((car) => car.userId == user.id)} />
    </div>
  );
};
