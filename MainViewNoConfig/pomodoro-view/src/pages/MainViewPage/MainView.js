import React, { createContext, useCallback } from "react";
import "../../components/assets/MainViewAssets/Styles.css";
/* import {
  NavBarComponent,
  MenuComponent,
  DraggableMenuComponent,
  ThemeSwitchComponent,
} from "../../components/MainViewComponent"; */

import { NavBarComponent, MenuComponent, DraggableMenuComponent,
  ThemeSwitchComponent } from "../../components";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { useState } from "react";

import ReactSwitch from "react-switch";
import styled, { ThemeProvider } from "styled-components";
/* import { lightTheme, darkTheme, GlobalStyles } from "../components/themes.js"; */
import SettingsContext from "./SettingsContext";
import Settings from "./Settings";
import Timer from "./Timer";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const ThemeContext = createContext(null);

const StyledApp = styled.div``;

const MainView = () => {
  const handle = useFullScreenHandle();
  const [show, toggleShow] = useState(true);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  //TIMER//
  //Funcion de mostrar TIMER DE POMODORO, le indicamos que showsettings tenga un valor predeterminado de falso que nos servirá para mostrar el timer
  //o los settings, linea 116
  //Cuando estamos viendo el timer y apretamos el boton de settins queremos que nos muestre setting mediante el setShowSettings
  const [showSettings, setShowSettings] = useState(false);
  //Como no teniamos algo que nos seteara los minutos creamos un const
  //como ya estan como state ahora puedo referenciarlos por sus nombres sin nada mas
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  //FULLSCREEN//

  const [isFullscreen, setIsPaused] = useState(true);

  return (
    /* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles>
                <StyledApp> */
    <FullScreen handle={handle} id={theme}>
      <header class="d-flex ms-auto">
        {/*Dentro de header:
                            1. Barra de navegación principal
                            2. Botón Zen fullscreen mode */}
        <div class="d-flex ms-auto align-items-center">
          <NavBarComponent />
          <div className="boton-notificaciones">
            <button
              className="btn btn-dark btn-notificaiones px-2 me-2"
              onClick={() => toggleShow(!show)}
            >
              <i class="fas fa-bell px-2 me-1"></i>
            </button>
          </div>
          <button
            type="button"
            class="botoncito btn btn-dark px-3 me-2"
            id="boton-zen"
            onClick={handle.enter}
          >
            <i class="fas fa-expand fa-lg"></i>
          </button>
          <ThemeSwitchComponent round={true} />
          {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
        </div>
      </header>
      <div class="position-relative">
        {!show && (
          <ul className="cont-not position-absolute top-0 end-0">
            <li className="li-noti">
              <div>
                <h5 style={{ color: "white" }}>Importante 1</h5>
              </div>
            </li>
            <h1></h1>
            <li className="li-noti">
              <h5 style={{ color: "white" }}>Notificación 2</h5>
            </li>
            <li className="li-noti">
              <h5 style={{ color: "white" }}>Notificación 3</h5>
            </li>
          </ul>
        )}
      </div>
      <div class="d-flex ms-auto align-items-center">
      <MenuComponent />
      </div>
      
      <div>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          //ahora podemos usar estos dos de abajo tanto en settings como en timer
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
      </div>

      
    </FullScreen>
    /* </StyledApp>
            </GlobalStyles>
        </ThemeProvider> */
  );
};
export default MainView;
