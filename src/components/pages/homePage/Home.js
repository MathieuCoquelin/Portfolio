import '../../../styles/pages/homePage/Home.css';
import code from '../../../assets/code.jpg';
import photo from '../../../assets/Photo.jpg';
import { Link } from "react-router-dom";

function Home(){ return(
    <div>
        <h1 className="name">Coquelin Mathieu</h1>
        <Link to="/about"><img src={photo} alt='personalPhoto' className="photo" ></img></Link>
        <Link to="/skills"><img src={code} alt='kwonLanguages' className="code"></img></Link>
    </div>
)}

export default Home