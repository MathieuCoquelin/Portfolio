import '../../../styles/pages/skillsPage/Skills.css';
import C from "../../../assets/C.png";
import CS from "../../../assets/CS.png";
import CPP from "../../../assets/CPP.png";
import Unity from "../../../assets/UNITY.png";
import Java from "../../../assets/JAVA.png";
import Git from "../../../assets/GIT.png";
import Python from "../../../assets/PYTHON.png";
import react from "../../../assets/REACT.png";

function Skills(){ return(
    <div className='skills'>
        <div className="rowTop">
            <img alt="c-logo" src={C} className="cLogo"></img>
            <img alt="cpp-logo" src={CPP} className="cppLogo"></img>
            <img alt="cs-logo" src={CS} className="csLogo"></img>
            <img alt="react-logo" src={react} className="reactLogo"></img>
        </div>
        <div className="rowBottom">
            <img alt="python-logo" src={Python} className="pythonLogo"></img>
            <img alt="java-logo" src={Java} className="javaLogo"></img>
            <img alt="git-logo" src={Git} className="gitLogo"></img>
            <img alt="unity-logo" src={Unity} className="unityLogo"></img>
        </div>
    </div>
)}

export default Skills