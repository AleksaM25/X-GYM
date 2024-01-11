import React, { useState } from "react";
import "./Main.css";
import Marker from "../ui/Marker";
import Gallery from "./Gallery";
import ModalComponent from "../ui/ModalComponent";
import AddPhoto from "./AddPhoto";

const Main = (props) => {
  return (
    <main id="section-1" className="main">
      <div className="overlayMain">
        <aside className="Fmarker">
          <h1>
            POSETITE NASU TERETANU i UVERITE SE ZASTO SMO NAJBOLJI U GRADU
          </h1>
          {/* <Marker
            text={
              "POSETITE NASU TERETANU I UVERITE SE ZASTO SMO NAJBOLJI U GRADU"
            }
          /> */}
        </aside>
        <section className="gallery">
          <Gallery admin={props.admin} />
        </section>
      </div>
    </main>
  );
};

export default Main;
