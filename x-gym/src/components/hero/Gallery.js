import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModalComponent from "../ui/ModalComponent";
import AddPhoto from "./AddPhoto";

const Gallery = (props) => {
  const [images, setImages] = useState([
    "/img/belt1.jpg",
    "/img/belt2.jpg",
    "/img/belt16.jpg",
    "/img/belt20.jpg",
    "/img/belt7.jpg",
    "/img/belt8.jpg",
    "/img/belt11.jpg",
    "/img/belt3.jpg",
    "/img/belt15.jpg",
    "/img/belt9.jpg",
    "/img/belt10.jpg",
    "/img/belt13.jpg",
    "/img/belt14.jpg",
    "/img/belt12.jpg",
    "/img/belt17.jpg",
    "/img/belt6.jpg",
    "/img/belt5.jpg",
    "/img/belt18.jpg",
    "/img/belt19.jpg",
  ]);

  const handleUpload = (imgULR) => {
    setImages([...images, imgULR]);
  };

  const handleRemove = (src) => {
    const index = images.indexOf(src);
    if (index !== -1) {
      setImages([...images.slice(0, index), ...images.slice(index + 1)]);
    }
  };

  return (
    <div style={{ padding: "10px", background: "black" }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        <Masonry gutter="20px">
          {images.map((image) => (
            <ModalComponent
              img={image}
              admin={props.admin}
              onRemove={handleRemove}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {props.admin && <AddPhoto onUpload={handleUpload} />}{" "}
    </div>
  );
};

export default Gallery;
