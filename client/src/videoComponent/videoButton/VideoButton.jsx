import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VideoButton = ({ smallFeedlEl }) => {
  const callStatus = useSelector((state) => state.callStatus);
  const streams = useSelector((state) => state.streams);
  const [pendingUpdate, setPendingUpdate] = useState(false);

  const startStopVideo = () => {
    // check if the video is, if so off it
    // check it the video is off, if so on it
    //check if we have we have media, if so start the stream
    if (callStatus.haveMedia) {
      smallFeedlEl.current.srcObject = streams.localStream.stream;
      // add tracks to the peerConnections
    } else {
      // if we dont have the media yet wait for it and then start the stream
      setPendingUpdate(true);
    }
  };

  // just for handling tiny case of when the media stream is not available
  useEffect(() => {
    if (pendingUpdate && callStatus.haveMedia) {
      setPendingUpdate(false);
      smallFeedlEl.current.srcObject = streams.localStream.stream;
    }
  }, [
    callStatus.haveMedia,
    pendingUpdate,
    smallFeedlEl,
    streams?.localStream?.stream,
  ]);

  return (
    <div className="button-wrapper video-button d-inline-block">
      <i className="fa fa-caret-up choose-video"></i>
      <div onClick={startStopVideo} className="button camera">
        <i className="fa fa-video"></i>
        <div className="btn-text">
          {callStatus.video === "display" ? "Stop" : "Start"} Video
        </div>
      </div>
    </div>
  );
};
export default VideoButton;
