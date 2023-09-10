import line from "../assets/icons/line.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import profile from "../assets/icons/profile.png";

const Navbar = () =>{
    return(
<div className="flex px-2 justify-between items-center">
    <img src={profile} alt="profile"width={40} />
    <ul className ="hidden md:flex">
        <li className="px-2">
            <a href="https://www.instagram.com/tha.rx/" target=" blank">
            <img src={instagram} alf="instagram" width={30} />               
            </a>
        </li>
        <li className="px-2"> 
        <a href="https://www.facebook.com" target=" blank">
            <img src={facebook} alf="facebook" width={30} />               
            </a>
        </li>
        <li className="px-2">
        <a href="https://www.line.com" target=" blank">
            <img src={line} alf="line" width={30} />               
            </a>
        </li>
    </ul>

</div>
    )
}

export default Navbar;