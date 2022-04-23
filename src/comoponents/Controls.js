
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import { faForward,faPause,faPlay,faBackward} from '@fortawesome/free-solid-svg-icons';


function Controls(props) {
    return (
        <div className='control'>

             <button className='control_skip equi' onClick={()=> props.skipSong(false)}>
                <FontAwesomeIcon icon ={ faBackward }/>
            </button>

            <button className='control_playbtn ' onClick={()=> props.setisPlaying(!props.isPlaying)}>
             <FontAwesomeIcon icon ={props.isPlaying? faPause :faPlay}/>
            </button>

            <button className='control_skip equi' onClick={()=> props.skipSong()}>
             <FontAwesomeIcon icon ={ faForward}/>
            </button>

            
        </div>
    )
}

export default Controls
