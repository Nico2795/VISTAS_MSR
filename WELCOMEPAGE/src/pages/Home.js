import React from "react";
import {MainComponent,TeamComponent,ServiciosComponent, FooterComponent} from "../components"
import '../Index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const HomePage= () =>{
    return(
        <div class="contenedor">
            <div class="main">
                <MainComponent/>
            </div>
            <div class="gap">
                <TeamComponent/>
            </div>
            
            <ServiciosComponent/>
            <FooterComponent/>
        </div>
    )
}

export default HomePage;