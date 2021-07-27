import Coverflow from './Coverflow';
import Games from './Games';
import MenuScreen from './MenuScreen';
import './Screen.css';
import Settings from './Settings';
import Music from './Music';

function Screen(props){
    const {coverFlow, music, games, settings, component, menuClick} = props;

    return(
        <div className="screen">
            
            {/* showing screen according to different conditions */}

            {(component && coverFlow)? <Coverflow menuClick={menuClick} /> 
            :(component && games)? <Games menuClick={menuClick} />
            :(component && settings)? <Settings menuClick={menuClick} />
            :(component && music)? <Music menuClick={menuClick} />  
            :<MenuScreen props={props} /> }

        </div>
    )
}

export default Screen;