import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6"> {/* ini buad background*/}
        
        <div class Name="flex flex-shrink-0 items-center">
        {/*    <img className="mx-2 w-10" src={logo} alt="logo" />  ini ntr logonya ganti*/}
        </div> 
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/rylda" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            {/* GitHub */}
            <a href="https://github.com/Shudalace" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/darrylms._/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            {/* X (Twitter) */}
            <a href="https://x.com/Drednoutsz?t=d8PH4G38mV073wwtp6q9YA&s=09" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />
            </a>
        </div>
    </nav>;
};

export default Navbar;