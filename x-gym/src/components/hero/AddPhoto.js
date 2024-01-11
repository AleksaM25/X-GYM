import React, { useState } from "react";
import "./AddPhoto.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ThemeProvider, createTheme } from "@mui/material";
import { Modal, Button } from "react-bootstrap";

const AddPhoto = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // const imgULR = selectedFile.name;
      // Logika za upload slike
      props.onUpload(imageUrl);
      setShowModal(false);
      setImageUrl("");
    }
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setImageUrl("");
  };
  // Menjanje css ikone material UI
  const theme = createTheme({
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            width: "20%",
            height: "20%",
          },
        },
      },
    },
  });

  return (
    <div id="addPhoto">
      <ThemeProvider theme={theme}>
        <AddCircleOutlineIcon onClick={handleModalOpen} />
      </ThemeProvider>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton onHide={handleModalClose}>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">
                Example file input
              </label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                onChange={handleFileChange}
              />
              {imageUrl && (
                <div className="mt-3">
                  <img src={imageUrl} alt="Uploaded" className="img-fluid" />
                </div>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpload}
          >
            Upload
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddPhoto;
