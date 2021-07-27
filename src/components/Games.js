import './Games.css';

function Games(props){
    const {menuClick} = props
    return(
        <div style={{height:"100%"}} >
            <div className="games">
                <h2>Games</h2>
                <img className="games__img" src="https://logos-download.com/wp-content/uploads/2016/11/EA_logo_logotype.png" alt="" />
            </div>

            {/* BUTTONS */}
            <div className="round-container">
                {/* menu */}
                <div className="menu i " onClick={menuClick}>MENU</div>
                {/* back icon, enter btn, forward icon */}
                <div className="middle-row">
                    <div className="fas fa-fast-backward i backward-btn "></div>
                    <div className="press-btn i"></div>
                    <div className="fas fa-fast-forward i forward-btn"></div>
                </div>
                {/* play-pause btn */}
                <div className="play-pause i"> <i className="fas fa-play"></i> <i className="fas fa-pause"></i> </div>
            </div>
        </div>
    )
}

export default Games;