import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'feather-icons';
import './style.css';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
import Single from "./Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StrictMode>
        <div id="root">
          <Header />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-8">
                <Main />
              </div>
              <div className="col-md-4">
                <Aside />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </StrictMode>
    ),
  },
  {
    path: "/single/:id",
    element: (
      <StrictMode>
        <Header />
        <Single />
        <Footer />
      </StrictMode>
    ),
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);