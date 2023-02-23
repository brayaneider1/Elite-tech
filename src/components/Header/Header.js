import React, { useState, useEffect } from "react";
import { InputComponent } from "../InputComponent/InputComponent";



export const HeaderC = () => {


  return (
    <div className="header">
      <div className="header_title">Inicio</div>
      <div className="header_options">
        <>
          <InputComponent />
        </>
        <div className="">

          <img src="https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_1280.png" />
        </div>
      </div>

    </div>
  );
};
