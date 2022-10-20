import React, { useEffect, useState } from "react";
import axios from "axios";
import Cars from "../commons/Cars";

const AllCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("/api/cars").then((res) => setCars(res.data));
  }, []);

  return <Cars cars={cars} />;
};

export default AllCars;
