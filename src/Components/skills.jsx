import resume from "../resources/AResume(HVS)-SDE_1.4.pdf";
export default function Skills(){
    return(
        <div id="skills">
        <p className="skills-heading">Resume</p>
        <hr style={{width:"10%", margin:" 0 3% 2%"}}></hr>
        <div className="resumediv">
        <embed src={require("../resources/AResume(HVS)-SDE_1.4.pdf")} type="application/pdf" className="resume"/>
        </div>
        </div>
    );
};