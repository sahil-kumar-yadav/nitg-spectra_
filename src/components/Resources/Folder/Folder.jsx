"use client";
import Svg from "../ArrowSvg/Svg";
import styles from "./folder.module.css"

import React, { useState } from 'react';

const Folder = ({ folderName, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleItems = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={styles.folder} onClick={toggleItems}>
        <Svg/>
        <span>{folderName}</span>
        {isOpen && <div className={styles.items}>{children}</div>}
      </div>
    );
  };

export default Folder