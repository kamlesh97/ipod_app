import React, { Component } from 'react';
import './App.css';
import './components/Buttons.css'
import ZingTouch from 'zingtouch';
import Screen from './components/Screen';


class App extends Component {
    constructor(){
      super();
      this.state = {
        coverFlow : false,
        music : false,
        games : false,
        settings :false,
        component : false
      }
    }

    // Mouse Rotate
    handleGesture = (event) =>{
        const ctx = this;
        // create new zingtouch region
        let activeRegion = new ZingTouch.Region(event.target);
        let distance = 0;

        // bind region to event
        activeRegion.bind(event.target, "rotate", function(event){
            distance = event.detail.distanceFromOrigin;

            // applying active class based on distance
            // coverflow active
            if(distance > 0 && distance < 85){
                ctx.setState({
                    coverFlow : true,
                    music : false,
                    games : false,
                    settings: false
                })
            }

            // music active
            else if(distance >= 85 && distance < 177){
                ctx.setState({
                    coverFlow : false,
                    music : true,
                    games : false,
                    settings: false
                })
            }

            // games active
            else if(distance >= 177 && distance < 264){
                ctx.setState({
                    coverFlow : false,
                    music : false,
                    games : true,
                    settings: false
                })
            }

            // settings active
            else if(distance >= 264 && distance < 360){
                    ctx.setState({
                    coverFlow : false,
                    music : false,
                    games : false,
                    settings: true
                })
            }

            // FOR ANTICLOCKWISE DIRECTION
            // coverflow active
            if(distance >= -360 && distance < -270){
                ctx.setState({
                    coverFlow : true,
                    music : false,
                    games : false,
                    settings: false
                })
            }

            // music active
            else if(distance >= -270 && distance < -168){
                ctx.setState({
                    coverFlow : false,
                    music : true,
                    games : false,
                    settings: false
                })
            }

            // games active
            else if(distance >= -168 && distance < -90){
                ctx.setState({
                    coverFlow : false,
                    music : false,
                    games : true,
                    settings: false
                })
            }

            // settings active
            else if(distance >= -90 && distance < 0){
                ctx.setState({
                    coverFlow : false,
                    music : false,
                    games : false,
                    settings: true
                })
            }
        })
    }

    //main BTN in the center click function
    centerClick = ()=>{
        this.setState({
            component : true
        })
    }

    // menu click funtion
    menuClick = ()=>{
        this.setState({
            component : false
        })
    }

    render(){
        // destructuring state
        const {coverFlow, music, games, settings, component} = this.state;

        return(
            <div className="app">
                <Screen 
                    coverFlow = {coverFlow} 
                    music = {music} 
                    games = {games} 
                    settings = {settings} 
                    component = {component}
                    handleGesture={this.handleGesture}
                    centerClick={this.centerClick}
                    menuClick={this.menuClick}
                    />
            </div>
        )
    };

}

export default App;
