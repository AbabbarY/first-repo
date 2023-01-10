import React, { Component } from "react";
import Composant from "./Composant";
import Result from "./Result";
class Accueil extends Component{
   
    render(){
        return(
            <div className="content">
                <p>Component App </p>
                <Composant />
                

                
            </div>
        )
    }
}


export default Accueil;
