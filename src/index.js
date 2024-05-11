import 'bootstrap/dist/css/bootstrap.min.css';
import 'feather-icons';
import './style.css';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
import "./message";


const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header></Header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <Main></Main>
                </div>
                <div className="col-md-4">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
);