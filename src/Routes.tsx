import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";

export function RouterM() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
