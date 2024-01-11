import React, { useState, useEffect } from "react";
import "./ModalComponent.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThemeProvider, createTheme } from "@mui/material";

const ModalComponent = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");

  const openModal = (src) => {
    setModalDisplay(true);
    setModalImgSrc(src);
  };

  const closeModal = () => {
    setModalDisplay(false);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setModalDisplay(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const handleDelete = () => {
    const deleteImg = props.img;
    console.log(deleteImg);
    props.onRemove(deleteImg);
  };

  const theme = createTheme({
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            width: "10%",
            height: "10%",
            color: "white",
            bottom: "-30px",
          },
        },
      },
    },
  });

  return (
    <div>
      <div className="deleteWrapper">
        <img
          id="myImg"
          src={props.img}
          alt="Image Alt Text"
          onClick={() => openModal(props.img, "Image Alt Text")}
        />
        {props.admin && (
          // <button className="delete" onClick={handleDelete}>
          //   DELETE
          // </button>
          <ThemeProvider theme={theme}>
            <DeleteIcon onClick={handleDelete} />
          </ThemeProvider>
        )}
      </div>

      {modalDisplay && (
        <div id="myModal" className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            id="img01"
            src={modalImgSrc}
            className="modal-content "
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
