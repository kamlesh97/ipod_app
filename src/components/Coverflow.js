import './Coverflow.css';

function Coverflow(props){
    const {menuClick} = props
    return(
        <div style={{height:"100%"}}>
            <div className="coverflow">
                <h2>COVER FLOW</h2>
                <img className="coverflow__img" src="https://www.wyzowl.com/wp-content/uploads/2018/08/The-20-Best-Royalty-Free-Music-Sites-in-2018.png" alt=""/>
            </div>

            {/* BUTTONS */}
            <div className="round-container" >
                {/* menu */}
                <div className="menu i " onClick={menuClick} >MENU</div>
                {/* back icon, enter btn, forward icon */}
                <div className="middle-row">
                    <div className="fas fa-fast-backward i backward-btn "></div>
                    <div className="press-btn i" ></div>
                    <div className="fas fa-fast-forward i forward-btn"></div>
                </div>
                {/* play-pause btn */}
                <div className="play-pause i"> <i className="fas fa-play"></i> <i className="fas fa-pause"></i> </div>
            </div>
        </div>
    )
}

export default Coverflow;