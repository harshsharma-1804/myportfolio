import React from "react";


function Card(props){
    return(
        <div className="content-card">
            <div className="content-card-heading">
                <h1 className="content-card-heading">{props.heading}</h1>
                <hr className="content-card-hr"/>
            </div>
            <div className="content-card-content">
                {props.content}
            </div>
        </div>
    )
}

export default Card;

