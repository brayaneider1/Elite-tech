import React, { useState, useEffect } from "react";
import { InputComponent } from "../InputComponent/InputComponent";
import { useAuth0 } from "@auth0/auth0-react";


export const HeaderC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="header">
      <div className="header_title">Inicio</div>
      <div className="header_options">
        <button onClick={() => loginWithRedirect()}>login</button>
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
