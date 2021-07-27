import './Music.css';
import { Component } from 'react';
import ZingTouch from 'zingtouch';
import AllSongs from './music-components/AllSongs';
import Artists from './music-components/Artists';
import Playlists from './music-components/Playlists';


class Music extends Component{

    constructor(){
        super();
        this.state={
            allSongs : false,
            artists : false,
            playlists : false,
            musicComponent : false
        }
    }

    handleMusicGesture = (event)=>{
        const ctx = this;
        
        // create new zingtouch region
        let activeRegion = new ZingTouch.Region(event.target)
        let distance = 0

        // bind region to event
        activeRegion.bind(event.target, "rotate", function(event){
            distance = event.detail.distanceFromOrigin;

            // applying active class based on distance
            // allsongs
            if(distance >= 0 && distance < 85){
                ctx.setState({
                    allSongs : true,
                    artists : false,
                    playlists : false,
                })
            }

            // artists active
            else if(distance >= 85 && distance < 177){
                ctx.setState({
                    allSongs : false,
                    artists : true,
                    playlists : false,
                })
            }

            // playlists active
            else if(distance >= 177 && distance < 264){
                ctx.setState({
                    allSongs : false,
                    artists : false,
                    playlists : true,
                })
            }

            // allsongs active
            else if(distance >= 264 && distance < 360){
                ctx.setState({
                    allSongs : true,
                    artists : false,
                    playlists : false,
                })
            }

            // FOR ANTICLOCKWISE DIRECTION
            // allsongs active
            if(distance >= -360 && distance < -270){
                ctx.setState({
                    allSongs : true,
                    artists : false,
                    playlists : false,
                })
            }

            // artist active
            else if(distance >= -270 && distance < -168){
                ctx.setState({
                    allSongs : false,
                    artists : true,
                    playlists : false,
                })
            }

            // playlists active
            else if(distance >= -168 && distance < -90){
                ctx.setState({
                    allSongs : false,
                    artists : false,
                    playlists : true,
                })
            }

            // allsongs active
            else if(distance >= -90 && distance < 0){
                ctx.setState({
                    allSongs : true,
                    artists : false,
                    playlists : false,
                })
            }
        })
    }

    //main BTN in the center click function
    centerMusicClick = ()=>{
        this.setState({
            musicComponent : true
        })
    }

    // menu click funtion
    menuMusicClick = ()=>{
        const{musicComponent} = this.state;
        const{menuClick} = this.props;

        if(!musicComponent) menuClick();
        else this.setState({
            musicComponent : false
        })
    }

    render(){
        const {allSongs, artists, playlists, musicComponent} = this.state;

        return(
            <div style={{height:"100%"}}>
                <div>
                    {   (musicComponent && allSongs)? <AllSongs />
                        :(musicComponent && artists)? <Artists/>
                        :(musicComponent && playlists)? <Playlists/>
                        :<div className="menuScreen" style={{backgroundImage : `url("https://thumbs.dreamstime.com/b/tree-silhouette-sunset-maasai-mara-national-reserve-kenya-silhouette-trees-sunet-african-163063822.jpg")`}}>
                            <div className="screen__left">
                                <h2>Music</h2>
                
                                <div className="menuItem">
                                    <div className={`menuItem-wrapper ${allSongs? "active" : ""}`}>
                                        <h4>All Songs</h4>
                                        <i className="fas fa-angle-right menu-icon "></i>
                                    </div>
                
                                    <div className={`menuItem-wrapper ${artists? "active" : ""}`}>
                                        <h4>Artists</h4>
                                        <i className="fas fa-angle-right menu-icon"></i>
                                    </div>
                
                                    <div className={`menuItem-wrapper ${playlists? "active" : ""}`}>
                                        <h4>Playlists</h4>
                                        <i className="fas fa-angle-right menu-icon"></i>
                                    </div>
                                </div>
                            </div>
            
                            <div className="screen__right"></div>
                        </div>
                    }    
                </div>

                {/* BUTTONS */}
                <div className="round-container" onClick={this.handleMusicGesture} >
                    {/* menu */}
                    <div className="menu i " onClick={this.menuMusicClick} >MENU</div>
                    {/* back icon, enter btn, forward icon */}
                    <div className="middle-row">
                        <div className="fas fa-fast-backward i backward-btn "></div>
                        <div className="press-btn i" onClick={this.centerMusicClick} ></div>
                        <div className="fas fa-fast-forward i forward-btn"></div>
                    </div>
                    {/* play-pause btn */}
                    <div className="play-pause i"> <i className="fas fa-play"></i> <i className="fas fa-pause"></i> </div>
                </div>
            </div>
        )
    }
    
}

export default Music;