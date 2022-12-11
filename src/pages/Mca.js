import React from "react";
import mca0 from "../assets/images/MCA0.png"
import  {Link} from "react-router-dom"
import "../styles/Mca.css"

function Mca(){
    return(
      <div>
        <div className="mca-main">
            <div className='mca-left text-center'>
                <Link to="/CSE" className='left-nav-links'>
                CSE
                </Link>
                <Link to="/MCA" className='left-nav-links left-active-link'>
                MCA
                </Link>
                <Link to="/CIVIL" className='left-nav-links'>
                CIVIL
                </Link>
                <Link to="/" className='left-nav-links'>
                EEE
                </Link>
            </div>
            <div className="mca-mid">
                <img src={mca0}/>
            </div>
            <div className="mca-right">
                <h4>Route</h4>
            </div>

        </div>
      </div>
    );
}
export default Mca;