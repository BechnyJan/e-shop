import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Backdrop({ onClick}) {
  return <div onClick={onClick} className={classes.backdrop} />;
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal({ children,onClick }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,portalElement
        
      )}
    </>
  );
}

export default Modal;
