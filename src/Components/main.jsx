import React from "react";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";


function Main(props){
    return(
        <div id="main">
            <About name={props.name} surname={props.surname} title={props.title}/>
            <Skills />
            <Projects />
        </div>
    );
}

export default Main;