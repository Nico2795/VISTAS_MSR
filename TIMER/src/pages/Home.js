import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../services/Index.css";
import Timer from "./Timer";
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";


//Mostrar settings del pomodoro



//Se escriben los datos que irán dentro de la tabla con los mismos parametros que esta tenga. 


const HomePage = () => {
    //Funcion de mostrar TIMER DE POMODORO, le indicamos que showsettings tenga un valor predeterminado de falso que nos servirá para mostrar el timer 
    //o los settings, linea 116
    //Cuando estamos viendo el timer y apretamos el boton de settins queremos que nos muestre setting mediante el setShowSettings
    const [showSettings, setShowSettings] = useState(false);
    //Como no teniamos algo que nos seteara los minutos creamos un const
    //como ya estan como state ahora puedo referenciarlos por sus nombres sin nada mas
    const[workMinutes, setWorkMinutes] = useState(25);
    const[breakMinutes, setBreakMinutes] = useState(5);


  return (
    <div>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        //ahora podemos usar estos dos de abajo tanto en settings como en timer
        setWorkMinutes,
        setBreakMinutes,
      }}>
      {showSettings ? <Settings/> : <Timer/>}
      </SettingsContext.Provider>

    </div>
  );
};
export default HomePage;
