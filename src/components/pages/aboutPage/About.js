import '../../../styles/pages/aboutPage/About.css';
import photo from '../../../assets/Photo.jpg';
import Contact from "./Contact"
import Description from "./Description"

function About()
{
    return(
        <div className='about'>
            <div className='row'>
                <img src={photo} alt='personalPhoto' className="photoPersonal" ></img>
                <Description/>
            </div>
            <Contact/>
        </div>
    )
}

export default About