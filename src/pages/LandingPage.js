import Navbar from "../components/Navbar";
import dog from "../assets/icons/dog.png";
import { Navigate, useNavigate } from "react-router-dom";

function LandingPage() {
    const Navigate = useNavigate();
    const handleToDetail = ()  => {
        Navigate("/details");
    };
    return (
        <div className="text-center font-mono">
            <p className="text-5xl font-bold uppercase">About Me </p>
        <div className="flex justify-center items-center">
        <img src={dog} alf="dog" width={200} />  
        

            </div>
            <p className="text-md mt-2 font-bold text -white mx-36">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <button className="text-xl text-[#8B4513] underline" onClick={handleToDetail}>NEXT
            </button>
        
        </div>
    );
}

export default LandingPage;