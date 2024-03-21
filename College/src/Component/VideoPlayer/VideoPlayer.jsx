import "./VideoPlayer.css";
import video from "../../assets/video1.mp4";
import { useRef } from "react";
import PropTypes from "prop-types"
export const VideoPlayer = ({playState, setPlayState}) => {
  const player = useRef(null)

  const closePlayer=(ev)=>{
    if(ev.target===player.current){
        setPlayState(false)
    }
  }
    return (
    <div className={`video-player ${playState? "": "hide"}` } ref={player} onClick={closePlayer}>
      <video src={video} muted autoPlay controls></video>
    </div>
  );
};

VideoPlayer.propTypes=   {
    playState:PropTypes.string,
    setPlayState:PropTypes.bool,
}