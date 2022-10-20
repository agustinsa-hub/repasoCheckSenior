import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "../commons/UsersContainer";
import SingleUser from "./SingleUser";
import AllCars from "./AllCars";
import SingleCar from "./SingleCar";
import NewCar from "./NewCar";

const Main = () => (
  <div>
    <Routes>
      <Route path="/" element={<UsersContainer />} />
      <Route path="/users/:id" element={<SingleUser />} />
      <Route path="/cars" element={<AllCars />} />
      <Route path="/getCar" element={<SingleCar />} />
      <Route path="/newCar" element={<NewCar />} />
    </Routes>
  </div>
);

export default Main;
