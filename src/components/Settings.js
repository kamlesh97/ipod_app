import './Settings.css';

function Settings(props){
    const{menuClick} = props
    return(
        <div style={{height:"100%"}}>
            <div className="settings">
                <h2>Settings</h2>
                <i className="settings__icon fas fa-cogs"></i>
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

export default Settings;