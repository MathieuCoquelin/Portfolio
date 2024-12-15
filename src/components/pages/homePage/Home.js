import '../../../styles/pages/homePage/Home.css';
import code from '../../../assets/code.jpg';
import photo from '../../../assets/Photo.jpg';
import { /*useNavigate,*/ Link } from "react-router-dom";

function Home()
{
    // const navigate = useNavigate()
   
    return(
        <div>
            <h1 className="name">Coquelin Mathieu</h1>
            <Link to="/about"><img src={photo} alt='personalPhoto' className="photo" ></img></Link>
            <Link to="/skills"><img src={code} alt='kwonLanguages' className="code"></img></Link>
            {/* onClick={ () => navigate(0)} */}
        </div>
    )
}

export default Home