import React from "react";
import { ModalBackground } from "./Modal.styles";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Modal = ({ children, close, toggle }) => {
  const { modal } = useSelector((state) => state.ui);
  const { form } = useSelector((state) => state.ui);

  const handleClick = (e) => {
    if (e.target.classList.contains("modal") && close) {
      close();
    }

    //back to login
    if (e.target.classList.contains("modal") && !form) {
      toggle();
    }
  };

  if (!modal) return "";

  return (
    <ModalBackground
      className="modal"
      onClick={handleClick}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </ModalBackground>
  );
};

export default Modal;
