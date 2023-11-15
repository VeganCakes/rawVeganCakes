"use client";
import React, { useEffect, useState } from "react";
// import "./style.scss";
import styles from "./style.module.css";
const Container = ({ displayModal, hideOnBlur, children }) => {
  const [displayModalState, setModalDisplayState] = useState(false);

  useEffect(() => {
    let timeOut;
    if (displayModal) {
      setModalDisplayState(displayModal);
    } else {
      timeOut = setTimeout(() => {
        setModalDisplayState(displayModal);
      }, 1000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [displayModal]);
  return displayModalState ? (
    <div
      onClick={hideOnBlur}
      className={`${styles.modalContainer} ${
        displayModal ? styles.active : styles.default
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.contentSection} ${
          displayModal ? styles.active : styles.default
        }`}
      >
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};
const Header = (props) => {
  return <div className={`${styles.headerSection}`}>{props.children}</div>;
};
const Body = (props) => {
  return (
    <div className={`${styles.bodySection}`}>
      
      {props.children}
    </div>
  );
};
const Footer = ({ children }) => {
  return (
    <div className={`${styles.footerSection} justify-start`}>{children}</div>
  );
};

export default {
  Container,
  Header,
  Body,
  Footer,
};