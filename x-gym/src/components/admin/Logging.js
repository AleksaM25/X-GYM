import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import "./Logging.css";

const Logging = (props) => {
  const [log, setLog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const admin = {
    username: "Aleksa",
    password: "123",
  };

  const handleUsername = (e) => setUsername(e.target.value);

  const handlePassword = (e) => setPassword(e.target.value);

  const handleModalOpen = () => setShowModal(true);

  const handleModalClose = () => setShowModal(false);

  const handleLogIn = (e) => {
    e.preventDefault();

    if (username === admin.username && password === admin.password) {
      setLog(true);
      console.log(log);
      // setLog((prevLog) => ({ log: (prevLog = true) }), setLog());
      handleModalClose();
      // props.onLog(log);
    } else {
      alert("Invalid username or password");
    }

    setUsername("");
    setPassword("");
  };

  const handleLogOut = (e) => {
    setLog(false);
    console.log(log);
    handleModalClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleModalOpen}>
        <PersonIcon fontSize="small" />
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton onHide={handleModalClose}>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
          // onSubmit={handleLogIn}
          >
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Username"
                onChange={handleUsername}
                value={username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={handlePassword}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogIn}
            >
              LogIn
            </button>
            <button
              type="submit"
              onClick={handleLogOut}
              className="btn m-4 btn-primary"
            >
              LogOut
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Logging;
