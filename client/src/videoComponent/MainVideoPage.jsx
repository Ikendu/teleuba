import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "./videoComponents.css";

function MainVideoPage() {
  //query string finder hpok
  const [searchParam, setSearchParams] = useSearchParams();
  const [appInfo, setAppinfo] = useState({});

  useEffect(() => {
    //grab the token out of the string
    const token = searchParam.get("token");
    const fetchValidatedLink = async () => {
      const resp = await axios.post("https://localhost:4000/validate-link", {
        token,
      });
      console.log(resp.data);
      setAppinfo(resp.data);
    };
    fetchValidatedLink();
  }, []);

  return (
    <div className="main-video-page">
      {/* To hold our remote video, our local video and our chat windows */}
      <div className="video-chat-wrapper">
        <video src="" id="large-feed" autoPlay controls playsInline></video>
        <video src="" id="own-feed" autoPlay controls playsInline></video>
      </div>
    </div>
  );
}
export default MainVideoPage;
