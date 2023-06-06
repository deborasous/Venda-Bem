import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import {
  Home,
  Product,
  AboutUs,
  Login,
  AddItem,
  Error,
  News,
} from "../pages/index";

const AppRoutes = ({ setActive }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Product />} />
      <Route path="/sobre" element={<AboutUs />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/entrar" element={<Login setActive={setActive} />} />
      <Route
        path="/cadastrar-produto"
        element={
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
