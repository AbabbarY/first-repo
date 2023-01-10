import React, { Component } from "react";
import Result from "./Result";




class Composant extends Component{
    constructor(props){
        super()
        this.state={search:"" ,affichage:""}
    }

    cherche = (e) =>{
        this.props.handleChange(e.target.value)
    }


    render(){
        return(
            <div className="compo">
                <p>Composant Cherchbar</p>
                <p>Entrer le mot clé de rechercher</p>
                <input type="text" onChange={(e)=>this.setState({search:e.target.value})}/><br />
                <button type="button" onClick={()=>this.setState({affichage:this.state.search})}>cherche</button>
                
                <Result food ={this.state.affichage} />
            </div>
        )
    }
}


export default Composant;
