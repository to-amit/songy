import React, { useEffect, useRef ,useState} from 'react'
import Controls from './Controls'
import Details from './Details'

function Player(props) {
    const audioEl =useRef(null)
    const [isPlaying, setisPlaying] = useState(false)

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    })

    const skipSong = (forwards = true) =>{
        if(forwards) {
            props.setcurrentSongIndex(()=>{
                  let temp =props.currentSongIndex;
                  temp++;
                  if(temp>props.songs.length -1){
                      temp =0;
                  }
                  return temp;
            });
        }else{
           props.setcurrentSongIndex(()=>{
            let temp =props.currentSongIndex;
            temp--;
            if(temp< 0){
                temp =props.songs.length -1;
            }
            return temp;
           });
        }
    };


    return (
        <div  className='player'>
            <h4> playing Now</h4>
            <Details
            song= {props.songs[props.currentSongIndex]}
            />
            <Controls
             isPlaying ={isPlaying}
             setisPlaying ={setisPlaying}
             skipSong={skipSong}
            />
            <audio className='Play_audio'
             src={props.songs[props.currentSongIndex].src}
             ref ={audioEl}
             controls
            >

            </audio>
           <div className="next">
           <h5 className='next-song'>
                Next : {" "} 
                <span>
                   {props.songs[props.nextSong].title } by {props.songs[props.nextSong].artist}
                </span>
            </h5>
           </div>
        </div>
    )
}

export default Player
