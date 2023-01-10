import React, { Component } from "react";



class Result extends Component{
    
    
    render(){
        const list_food  =  [
          {id:1,name : "banane",type:"fruits"},
          {id:2,name : "kiwi",type:"fruits"},
          {id:3,name : "batata",type:"legume"},
          {id:4,name : "maticha",type:"legume"},
        ]
        var res = this.props.food;
        var fit = list_food.filter(index=>index.type == res)
        
        return(
            <div className="compo">
                <p>composant ResultList</p>
                <p>le type Legume</p>
                {fit.map((index)=>{
                    return <p>{index.name}</p>
                })}                    
            </div>
        )
    }
}


export default Result;
