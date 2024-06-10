import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "./videoComponents.css";
import CallInfo from "./CallInfo";
import ChatWindow from "./ChatWindow";
import ActionButtons from "./ActionButtons";
import addStream from "../redux-elemets/actions/addStream";
import { useDispatch } from "react-redux";
import createPeerConnection from "../utilities/creatPeerConnection";

function MainVideoPage() {
  //query string finder hpok
  const [searchParam, setSearchParams] = useSearchParams();
  const [apptInfo, setApptinfo] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch the users media
    const fetchMedia = async () => {
      let constrians = {
        video: true, // must have one constraints just dont show it yet
        audio: false,
      };
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constrians);
        // dispatch will send this function to the redux dispatcher so all reducers are notified
        // we send two args, the who and the stream
        dispatch(addStream("localStream", stream));
        const { peerConection, remoteStream } = createPeerConnection;
        dispatch(addStream("remote1", remoteStream, peerConection));
        // we have a peerConnection so we can now make an offer
        // we still SDP information about the feed and we have no track yet
      } catch (error) {
        console.log(error);
      }
    };
    fetchMedia();
  }, []);

  useEffect(() => {
    //grab the token out of the string
    const token = searchParam.get("token");
    const fetchValidatedLink = async () => {
      const resp = await axios.post("https://localhost:4000/validate-link", {
        token,
      });
      console.log(resp.data);
      setApptinfo(resp.data);
    };
    fetchValidatedLink();
  }, []);

  return (
    <div className="main-video-page">
      {/* To hold our remote video, our local video and our chat windows */}
      <div className="video-chat-wrapper">
        <video src="" id="large-feed" autoPlay controls playsInline></video>
        <video src="" id="own-feed" autoPlay controls playsInline></video>
        {apptInfo.professionalsFullName && <CallInfo apptInfo={apptInfo} />}
        <ChatWindow />
      </div>
      <ActionButtons />
    </div>
  );
}
export default MainVideoPage;
