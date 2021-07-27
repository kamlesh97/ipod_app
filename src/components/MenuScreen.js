import './MenuScreen.css';

function MenuScreen(props){
    const {coverFlow, music, games, settings, handleGesture, centerClick, menuClick} = props.props;

    return(
        <div style={{height:"100%"}}>
            <div className="menuScreen" style={{backgroundImage : `url("https://thumbs.dreamstime.com/b/tree-silhouette-sunset-maasai-mara-national-reserve-kenya-silhouette-trees-sunet-african-163063822.jpg")`}}>
                <div className="screen__left">
                    {/* heading */}
                    <h2>iPod.js</h2>

                    {/* different menu options */}
                    <div className="menuItem">
                        <div className={`menuItem-wrapper ${coverFlow ? "active" : ""}`}>
                            <h4>Cover Flow</h4>
                            <i className="fas fa-angle-right menu-icon "></i>
                        </div>

                        <div className={`menuItem-wrapper ${music ? "active" : ""}`}>
                            <h4>Music</h4>
                            <i className="fas fa-angle-right menu-icon"></i>
                        </div>

                        <div className={`menuItem-wrapper ${games ? "active" : ""}`}>
                            <h4>Games</h4>
                            <i className="fas fa-angle-right menu-icon"></i>
                        </div>

                        <div className={`menuItem-wrapper ${settings ? "active" : ""}`}>
                            <h4>Settings</h4>
                            <i className="fas fa-angle-right menu-icon"></i>
                        </div>
                    </div>
                </div>

                <div className="screen__right"></div>
            </div>

            {/* BUTTONS */}
            <div className="round-container" onClick={handleGesture}>
                {/* menu */}
                <div className="menu i " onClick={menuClick}>MENU</div>
                {/* back icon, enter btn, forward icon */}
                <div className="middle-row">
                    <div className="fas fa-fast-backward i backward-btn "></div>
                    <div className="press-btn i" onClick={centerClick}></div>
                    <div className="fas fa-fast-forward i forward-btn"></div>
                </div>
                {/* play-pause btn */}
                <div className="play-pause i"> <i className="fas fa-play"></i> <i className="fas fa-pause"></i> </div>
            </div>
        </div>
    )
}

export default MenuScreen;